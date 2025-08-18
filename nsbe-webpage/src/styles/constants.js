/**
 * NSBE Website Design Constants
 *
 * Centralized constants for consistent styling across components.
 * These replace hard-coded values and viewport-dependent units.
 */

// Spacing Scale (based on Tailwind's 4px grid)
export const SPACING = {
  xs: "px-4 py-2", // Extra small padding
  sm: "px-6 py-3", // Small padding
  md: "px-8 py-4", // Medium padding
  lg: "px-10 py-6", // Large padding
  xl: "px-12 py-8", // Extra large padding
};

// Section Spacing (replaces viewport units)
export const SECTION_SPACING = {
  sm: "py-12 md:py-16 lg:py-20", // Small sections
  md: "py-14 md:py-18 lg:py-22 xl:py-26", // Default sections
  lg: "py-20 md:py-24 lg:py-28 xl:py-32", // Large sections
};

// Container Widths
export const CONTAINERS = {
  narrow: "mx-auto max-w-4xl px-6 lg:px-8",
  default: "mx-auto max-w-7xl px-6 lg:px-8",
  wide: "mx-auto max-w-none px-6 lg:px-8",
};

// Typography Classes
export const TYPOGRAPHY = {
  hero: "font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-wider text-center transition-transform duration-300 ease-out hover:scale-105 leading-tight md:leading-tight lg:leading-none",
  sectionTitle:
    "font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide transition-transform duration-300 ease-out hover:scale-105 leading-tight",
  subsectionTitle:
    "font-semibold text-xl md:text-2xl lg:text-3xl tracking-wider text-gray-900 leading-relaxed",
  body: "text-lg md:text-xl leading-relaxed text-gray-700",
};

// Card Styles
export const CARD_STYLES = {
  default:
    "relative rounded-2xl border-l-8 border-orange-700 bg-orange-50 p-6 transition-transform duration-300 ease-out hover:scale-105",
  image:
    "relative rounded-2xl transition-transform duration-300 ease-out hover:scale-105",
};

// Button Styles
export const BUTTON_STYLES = {
  primary:
    "inline-flex items-center justify-center rounded-3xl px-8 py-3 font-semibold text-white bg-orange-700 hover:bg-orange-600 transition-all duration-300 ease-out hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  secondary:
    "inline-flex items-center justify-center rounded-3xl px-8 py-3 font-semibold text-orange-700 bg-white border-2 border-orange-700 hover:bg-orange-50 transition-all duration-300 ease-out hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
};

// Grid Layouts
export const GRID_LAYOUTS = {
  responsive2: "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16",
  responsive3:
    "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16",
};

// Common Interactive Effects
export const INTERACTIVE = {
  hover: "transition-all duration-300 ease-out hover:scale-105",
  lift: "transition-transform duration-300 ease-out hover:scale-110",
  subtle: "transition-transform duration-300 ease-out hover:scale-[1.02]",
};

// Navigation Styles
export const NAVIGATION = {
  link: "text-lg font-semibold leading-6 text-white hover:text-orange-400 transition-all duration-300 ease-out hover:scale-110 whitespace-nowrap",
  mobileLink:
    "w-full text-left block px-3 py-3 text-base font-semibold leading-7 text-white hover:text-orange-400 transition-all duration-200 ease-out hover:scale-[1.02]",
};

// Icon Sizes
export const ICON_SIZES = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
};

// Image Responsive Classes
export const IMAGE_STYLES = {
  responsive:
    "w-full h-auto object-cover transition-transform duration-300 ease-out hover:scale-105",
  galleryItem:
    "object-cover transition-transform duration-300 ease-out hover:scale-105 pointer-events-none select-none",
  profileImage:
    "object-cover transition-transform duration-300 ease-out hover:scale-105 select-none",
  heroImage: "w-full h-auto object-cover object-center",
  socialIcon:
    "object-contain transition-transform duration-300 ease-out hover:scale-110 select-none",
};

// Shadow & Elevation (using the existing CSS custom properties)
export const ELEVATION = {
  card: "shadow-lg",
  cardBrand: "style-brand-shadow", // Custom class for the brand shadow effect
  button: "shadow-md",
};

// Component-specific responsive sizes (to replace viewport units)
export const RESPONSIVE_SIZES = {
  iframe: {
    default:
      "h-96 w-full max-w-4xl md:h-[500px] lg:h-[600px] lg:w-[800px] max-lg:h-80 max-md:h-72 max-sm:h-72",
  },
  galleryImage: {
    default:
      "h-72 w-96 md:h-80 md:w-[26rem] lg:h-96 lg:w-[28rem] max-md:w-80 max-sm:h-64 max-sm:w-full",
  },
  officerPhoto: {
    head: "h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44",
    member: "h-24 w-24 md:h-28 md:w-28",
  },
  heroImage: {
    default: "w-full h-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl",
  },
  socialIcon: {
    small: "h-5 w-5 md:h-6 md:w-6",
    medium: "h-8 w-8 md:h-10 md:w-10",
    large: "h-10 w-10 md:h-12 md:w-12",
  },
};
