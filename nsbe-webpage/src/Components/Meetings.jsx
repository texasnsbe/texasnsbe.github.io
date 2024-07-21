const nsbelogo = 'https://i.imgur.com/AIXEqzs.png'
const socials = [
  {
    id: 1,
    title: 'Baking Social',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'GBM', href: '#' },
    slideImg: 'https://i.imgur.com/LIIVvqD.png',
  },
  {
    id: 1,
    title: 'Hoop Night',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'GBM', href: '#' },
    slideImg: 'https://i.imgur.com/5ACFiK3.png',
  },
  {
    id: 1,
    title: 'F.A.T. Cookout',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'GBM', href: '#' },
    slideImg: 'https://i.imgur.com/9lsGAxm.png',
  },
]

const gbmposts = [
  {
    id: 1,
    title: 'General Body Meeting #8',
    href: 'https://docs.google.com/presentation/d/1i8DYxqQSpMqL3kZOFm2Z2ei-tEC2ewaCmIUry52v1x4/edit#slide=id.g26687197570_0_1852',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Jan 30, 2024',
    datetime: '2024-01-30',
    category: { title: 'GBM', href: '#' },
    slideImg: 'https://i.imgur.com/3kmaZSL.png',
  },
  {
    id: 2,
    title: 'General Body Meeting #11',
    href: 'https://docs.google.com/presentation/d/1Q0eRf68CTANJjmw_6NrwcudnulKBw4YSdhkuOjALyd4/edit#slide=id.g27b4cbbc001_0_0',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Feb 27, 2024',
    datetime: '2024-02-27',
    category: { title: 'GBM', href: '#' },
    slideImg: 'https://i.imgur.com/5bFS8kU.png',
  },
  {
    id: 3,
    title: 'General Body Meeting #10',
    href: 'https://docs.google.com/presentation/d/1NMTBXm19MvcqfNcL1Kxn4oEWFwn9n9RGvbPA6aElJ7M/edit#slide=id.g23aeaf54671_0_0',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 19, 2024',
    datetime: '2024-03-19',
    category: { title: 'GBM', href: '#' },
    slideImg: 'https://i.imgur.com/oMAXpQA.png',
  },
  // More posts...
]

const fatposts = [
  {
    id: 1,
    title: 'F.A.T. General Body Meeting #4',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'FAT', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    slideImg: 'https://i.imgur.com/3TdrJhy.png',
  },
  {
    id: 2,
    title: 'F.A.T. General Body Meeting #3',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'FAT', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    slideImg: 'https://i.imgur.com/E8ZdZA2.png',
  },
  {
    id: 3,
    title: 'F.A.T. General Body Meeting #2',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'FAT', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    slideImg: 'https://i.imgur.com/pXWW6Ku.png',
  },
  // More posts...
]

export default function Meetings() {
  return (

    <div className="purple-bg py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl subheaderstyle text-gray-900 sm:text-7xl">Upcoming...</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 border-b border-gray-200 mx-auto pb-5">
            Check out any events or opportunities you don't want to miss.
          </p>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h3 className="text-base font-semibold leading-7 text-gray-900 border-l-8 border-indigo-800 px-3">Socials and Events</h3>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {socials.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between ">
              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                  <img className="darkbg rounded-2xl object-cover w-96 h-60" src={post.slideImg} alt="" />
                </a>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-32 text-3xl subheaderstyle tracking-tight text-gray-900 sm:text-7xl">Recent Meetings</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 border-b border-gray-200 mx-auto pb-5">
            Check out any events or opportunities you may have missed.
          </p>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h3 className="text-base font-semibold leading-7 text-gray-900 border-l-8 border-indigo-800 px-3">General Body Meetings</h3>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {gbmposts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                  <img className="darkbg rounded-2xl w-full h-auto"src={post.slideImg} alt="" />
                </a>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Fat Meetings */}

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h3 className="text-base font-semibold leading-7 text-gray-900 border-l-8 border-x-indigo-800 px-3">Freshman Action Team Meetings</h3>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {fatposts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                  <img className="darkbg rounded-2xl" src={post.slideImg} alt="" />
                </a>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
