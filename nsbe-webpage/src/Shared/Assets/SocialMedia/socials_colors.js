/**
 * Social Media Links with Colored Icons
 *
 * Contains an array of NSBE's social media platforms with their colored icon URLs
 * and corresponding links. These are used in the footer and other social media
 * sections to display clickable social media icons in full color.
 *
 * @constant {Array<Object>} socialImgs - Array of social media platform objects
 * @property {string} name - Name of the social media platform
 * @property {string} img - URL to the colored icon image
 * @property {string} link - URL to the NSBE's profile on that platform
 */
import emailLogo from "../email_logo.png";

const socialImgs = [
  {
    name: "LinkedIn",
    img: "https://i.imgur.com/KJP9wXt.png",
    link: "https://www.linkedin.com/company/utnsbe/",
  },
  {
    img: "https://i.imgur.com/Qed4AT4.png",
    link: "https://www.instagram.com/texasnsbe?igsh=MWk3NGtvYXhiZmc1cw==",
    name: "Instagram",
  },
  {
    img: "https://i.imgur.com/l8GB9zA.png",
    link: "https://join.slack.com/t/nsbemembers/shared_invite/zt-300d5xbgx-v4TAw44OKie8EYvkVZI_tA",
    name: "Slack",
  },
  {
    img: "https://i.imgur.com/LvA8vFF.png",
    link: "https://x.com/utnsbe",
    name: "X",
  },
  {
    img: "https://i.imgur.com/K7ZNRDu.png",
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
