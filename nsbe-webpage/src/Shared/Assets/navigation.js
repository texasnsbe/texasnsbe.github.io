/**
 * Navigation Configuration
 *
 * Defines the main navigation menu items for the NSBE website.
 * Each item contains a display name and the corresponding route path.
 * Currently includes Home and Officers pages, with Resources commented out.
 *
 * @constant {Array<Object>} navigation - Array of navigation menu items
 * @property {string} name - Display name for the navigation item
 * @property {string} to - Route path for the navigation item
 */
const navigation = [
  { name: "Home", to: "/" },
  { name: "Officers", to: "/officers" },
  // { name: 'Resources', to: '/resources' },
];

export default navigation;
