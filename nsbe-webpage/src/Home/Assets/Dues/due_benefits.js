/**
 * NSBE Membership Dues Benefits
 *
 * Defines the benefits that NSBE members receive for paying their $25 annual dues.
 * Each benefit includes a name, description, and icon component from Heroicons.
 * These benefits are displayed in the PayDues component to encourage membership.
 *
 * @constant {Array<Object>} features - Array of membership benefit objects
 * @property {string} name - Name/title of the benefit
 * @property {string} description - Description of what the benefit provides
 * @property {Component} icon - React icon component from Heroicons
 */
import { CheckBadgeIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "FREE FOOD!",
    description: "Be the first ones to eat!",
    icon: CheckBadgeIcon,
  },
  {
    name: "FREE MERCH!",
    description: "Every member gets free merch!",
    icon: CheckBadgeIcon,
  },
  {
    name: "MEMBERSHIP PRIORITY!",
    description: "Application Priority",
    icon: CheckBadgeIcon,
  },
];

export default features;
