/**
 * NSBE Resources Configuration
 *
 * Contains an array of resource links available to NSBE members including
 * newsletters, QR codes, test bank, resume drop, dues payment, and funding options.
 * Each resource has an ID, caption description, header title, and external link.
 *
 * @constant {Array<Object>} stats - Array of resource objects
 * @property {number} id - Unique identifier for the resource
 * @property {string} caption - Descriptive text explaining the resource
 * @property {string} header - Main title/heading for the resource
 * @property {string} link - External URL for the resource
 */
const stats = [
  {
    id: 1,
    caption: "Stay updated to the lastest NSBE news",
    header: "Newsletter",
    link: "https://www.instagram.com/ut_nsbe/",
  },
  {
    id: 2,
    caption: "Assets under holding",
    header: "QR Codes",
    link: "https://www.instagram.com/ut_nsbe/",
  },
  {
    id: 4,
    caption: "Need Academic Support, check out our test bank",
    header: "Test Bank",
    link: "https://www.instagram.com/ut_nsbe/",
  },
  {
    id: 5,
    caption: "Want company eyes on you?... Drop your resume here",
    header: "Resume Drop",
    link: "https://www.instagram.com/ut_nsbe/",
  },
  {
    id: 6,
    caption: "Pay your dues to get access to everything NSBE!",
    header: "Pay Dues",
    link: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc2rP4CcGY-RkZGd3M3lASSjejy1TgNu-l2nUIaqOjCXUIicw/viewform?usp=sf_link&pli=1",
  },
  {
    id: 7,
    caption: "Want to support NSBE?... ",
    header: "Fund NSBE",
    link: "https://www.instagram.com/ut_nsbe/",
  },
];
export default stats;
