/**
 * Image Utilities
 *
 * Utility functions for image optimization, responsive sizing,
 * and performance improvements across the NSBE website.
 *
 * @module ImageUtils
 */

/**
 * Generates responsive image sizes attribute for different breakpoints
 * @param {Object} sizes - Object with breakpoint keys and size values
 * @returns {string} Formatted sizes attribute
 */
export const generateSizes = (sizes = {}) => {
  const defaultSizes = {
    sm: "100vw",
    md: "50vw",
    lg: "33vw",
    xl: "25vw",
  };

  const finalSizes = { ...defaultSizes, ...sizes };

  return [
    `(max-width: 640px) ${finalSizes.sm}`,
    `(max-width: 768px) ${finalSizes.md}`,
    `(max-width: 1024px) ${finalSizes.lg}`,
    `${finalSizes.xl}`,
  ].join(", ");
};

/**
 * Common responsive size configurations for different image types
 */
export const RESPONSIVE_CONFIGS = {
  gallery: {
    sizes: generateSizes({ sm: "100vw", md: "80vw", lg: "28rem", xl: "28rem" }),
    className:
      "h-72 w-96 md:h-80 md:w-[26rem] lg:h-96 lg:w-[28rem] max-md:w-80 max-sm:h-64 max-sm:w-full",
  },
  profile: {
    sizes: generateSizes({ sm: "96px", md: "128px", lg: "160px", xl: "176px" }),
    className: "h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40",
  },
  profileLarge: {
    sizes: generateSizes({
      sm: "160px",
      md: "192px",
      lg: "224px",
      xl: "256px",
    }),
    className: "h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56",
  },
  profileExtraLarge: {
    sizes: generateSizes({
      sm: "192px",
      md: "224px",
      lg: "256px",
      xl: "288px",
    }),
    className: "h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64",
  },
  hero: {
    sizes: generateSizes({
      sm: "100vw",
      md: "100vw",
      lg: "80rem",
      xl: "96rem",
    }),
    className: "w-full h-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl",
  },
  thumbnail: {
    sizes: generateSizes({
      sm: "100vw",
      md: "400px",
      lg: "400px",
      xl: "400px",
    }),
    className: "w-full h-64 object-cover",
  },
  socialIcon: {
    sizes: generateSizes({ sm: "24px", md: "32px", lg: "40px", xl: "48px" }),
    className: "h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10",
  },
};

/**
 * Optimized loading strategies for different image types
 */
export const LOADING_STRATEGIES = {
  hero: { loading: "eager", decoding: "sync" },
  aboveFold: { loading: "eager", decoding: "async" },
  lazy: { loading: "lazy", decoding: "async" },
  background: { loading: "lazy", decoding: "async" },
};

/**
 * Gets the appropriate image configuration for a specific use case
 * @param {string} type - Image type (gallery, profile, hero, etc.)
 * @param {Object} overrides - Optional overrides for default config
 * @returns {Object} Complete image configuration
 */
export const getImageConfig = (type = "lazy", overrides = {}) => {
  const config = RESPONSIVE_CONFIGS[type] || {};
  const loading = LOADING_STRATEGIES[type] || LOADING_STRATEGIES.lazy;

  return {
    ...config,
    ...loading,
    ...overrides,
  };
};

/**
 * Optimized image props for common use cases
 */
export const IMAGE_PRESETS = {
  eventPhoto: {
    ...getImageConfig("gallery"),
    className: `${RESPONSIVE_CONFIGS.gallery.className} object-cover transition-transform duration-300 ease-out hover:scale-105 pointer-events-none select-none style-brand-shadow inline-block mx-3 rounded-2xl`,
  },
  officerPhotoHead: {
    ...getImageConfig("profileExtraLarge"),
    className: `${RESPONSIVE_CONFIGS.profileExtraLarge.className} object-cover transition-transform duration-300 ease-out hover:scale-105 select-none rounded-full style-brand-shadow border-8 border-white`,
  },
  officerPhotoMember: {
    ...getImageConfig("profile"),
    className: `${RESPONSIVE_CONFIGS.profile.className} object-cover transition-transform duration-300 ease-out hover:scale-105 select-none rounded-full style-brand-shadow`,
  },
  heroImage: {
    ...getImageConfig("hero"),
    className: `${RESPONSIVE_CONFIGS.hero.className} w-full h-auto object-cover object-center transition-transform duration-300 ease-out hover:scale-105 style-brand-shadow rounded-2xl`,
  },
  meetingThumbnail: {
    ...getImageConfig("thumbnail"),
    className: `${RESPONSIVE_CONFIGS.thumbnail.className} rounded-2xl transition-transform duration-300 ease-out hover:scale-105 style-brand-shadow`,
  },
  socialIcon: {
    ...getImageConfig("socialIcon"),
    className: `${RESPONSIVE_CONFIGS.socialIcon.className} object-contain transition-transform duration-300 ease-out hover:scale-110 select-none`,
  },
  logo: {
    loading: "eager",
    decoding: "sync",
    className:
      "h-15 w-auto transition-transform duration-300 ease-out hover:scale-105",
  },
};

/**
 * Validates and optimizes image dimensions for consistent aspect ratios
 * @param {number} width - Original width
 * @param {number} height - Original height
 * @param {string} type - Image type for aspect ratio rules
 * @returns {Object} Optimized dimensions
 */
export const optimizeDimensions = (width, height, type = "default") => {
  const aspectRatios = {
    gallery: 4 / 3,
    profile: 1,
    hero: 16 / 9,
    thumbnail: 16 / 9,
    card: 3 / 2,
  };

  const targetRatio = aspectRatios[type] || width / height;

  if (type === "profile") {
    // For profile images, ensure square aspect ratio
    const size = Math.min(width, height);
    return { width: size, height: size };
  }

  if (width / height > targetRatio) {
    // Too wide, adjust width
    return { width: Math.round(height * targetRatio), height };
  } else {
    // Too tall, adjust height
    return { width, height: Math.round(width / targetRatio) };
  }
};
