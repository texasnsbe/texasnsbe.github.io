/**
 * OptimizedImage Component
 *
 * A reusable image component that provides consistent image optimization,
 * loading states, error handling, and responsive behavior across the application.
 * Features include lazy loading, proper aspect ratios, and optimized rendering.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.width] - Image width for layout
 * @param {number} [props.height] - Image height for layout
 * @param {string} [props.loading] - Loading strategy ('lazy', 'eager')
 * @param {string} [props.decoding] - Decoding strategy ('async', 'sync', 'auto')
 * @param {string} [props.objectFit] - CSS object-fit property
 * @param {string} [props.sizes] - Responsive sizes attribute
 * @param {Function} [props.onLoad] - Callback when image loads
 * @param {Function} [props.onError] - Callback when image fails to load
 * @returns {JSX.Element} Optimized image component
 */
import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  objectFit = 'cover',
  sizes,
  onLoad,
  onError,
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setImageError(true);
    if (onError) onError();
  }, [onError]);

  // Base styles for optimization
  const baseStyles = {
    imageRendering: 'optimize-contrast',
  };

  // Combine classes with optimization styles
  const imageClasses = `
    ${className}
    ${!imageLoaded ? 'opacity-0' : 'opacity-100'}
    transition-opacity duration-300 ease-out
    ${objectFit === 'cover' ? 'object-cover' : ''}
    ${objectFit === 'contain' ? 'object-contain' : ''}
    ${objectFit === 'fill' ? 'object-fill' : ''}
  `.trim().replace(/\s+/g, ' ');

  if (imageError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={imageClasses}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      style={baseStyles}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  sizes: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default OptimizedImage;
