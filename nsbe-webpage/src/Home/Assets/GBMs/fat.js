/**
 * F.A.T. (Freshmen Advancement Team) Posts
 *
 * Contains an array of F.A.T. General Body Meeting presentations and events.
 * F.A.T. is a program designed to support freshman members of NSBE.
 * Each post includes meeting details, presentation links, and thumbnail images.
 *
 * @constant {Array<Object>} fatposts - Array of F.A.T. event objects
 * @property {number} id - Unique identifier for the post
 * @property {string} title - Title of the F.A.T. meeting/event
 * @property {string} href - URL to related presentation or content
 * @property {string} date - Date of the meeting/event
 * @property {string} datetime - ISO datetime format for the event
 * @property {Object} category - Category information with title and href
 * @property {Object} author - Author information (placeholder data)
 * @property {string} slideImg - Imported thumbnail image for the event
 */
import gbm1 from "../HomeEvents/GBMHeader/Screenshot 2024-10-22 at 9.36.51 AM.png";

const fatposts = [
  {
    id: 1,
    title: "F.A.T. General Body Meeting #2",
    href: "#",
    date: "Oct 20, 2024",
    datetime: "2020-03-16",
    category: { title: "FAT", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    slideImg: gbm1,
  },
  // {
  //   id: 2,
  //   title: 'F.A.T. General Body Meeting #3',
  //   href: '#',
  //   date: 'Mar 16, 2020',
  //   datetime: '2020-03-16',
  //   category: { title: 'FAT', href: '#' },
  //   author: {
  //     name: 'Michael Foster',
  //     role: 'Co-Founder / CTO',
  //     href: '#',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  //   slideImg: 'https://i.imgur.com/E8ZdZA2.png',
  // },
  // {
  //   id: 3,
  //   title: 'F.A.T. General Body Meeting #2',
  //   href: '#',
  //   date: 'Mar 16, 2020',
  //   datetime: '2020-03-16',
  //   category: { title: 'FAT', href: '#' },
  //   author: {
  //     name: 'Michael Foster',
  //     role: 'Co-Founder / CTO',
  //     href: '#',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  //   slideImg: 'https://i.imgur.com/pXWW6Ku.png',
  // },
  // More posts...
];

export default fatposts;
