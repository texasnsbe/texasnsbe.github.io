/**
 * Social Media Links with Grayscale Icons
 *
 * Contains an array of NSBE's social media platforms with their grayscale icon URLs
 * and corresponding links. These are used as shadow/background elements in the footer
 * to create depth effects behind the colored social media icons.
 *
 * @constant {Array<Object>} socialImgs - Array of social media platform objects with grayscale icons
 * @property {string} name - Name of the social media platform
 * @property {string} img - URL to the grayscale icon image
 * @property {string} link - URL to the NSBE's profile on that platform
 */
import emailLogo from "../email_logo.png";

const socialImgs = [
  {
    name: "LinkedIn",
    img: "https://i.imgur.com/MCA42gN.png",
    link: "https://www.linkedin.com/company/utnsbe/",
  },
  {
    img: "https://i.imgur.com/rIbUWeH.png",
    link: "https://www.instagram.com/texasnsbe?igsh=MWk3NGtvYXhiZmc1cw==",
    name: "Instagram",
  },
  {
    img: "https://i.imgur.com/uhRUrsD.png",
    link: "https://join.slack.com/t/nsbemembers/shared_invite/zt-300d5xbgx-v4TAw44OKie8EYvkVZI_tA",
    name: "Slack",
  },
  {
    img: "https://i.imgur.com/LvA8vFF.png",
    link: "https://x.com/utnsbe",
    name: "X",
  },
  {
    img: "https://i.imgur.com/F7O5Op8.png",
    link: "https://www.facebook.com/groups/utnsbe/",
    name: "Facebook",
  },
  {
    name: "Email",
    img: emailLogo,
    link: "mailto:utnsbechair1@gmail.com",
  },
];

export default socialImgs;
