import nsbelogo from "../assets/nsbelogo"
import upcoming from "../assets/HomeEvents/upcoming.js"
import gbmposts from "../assets/HomeEvents/gbm.js"
import fatposts from "../assets/HomeEvents/fat.js"

export default function Meetings() {
  return (

    <div className="purple-bg py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl subheaderstyle text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out">Upcoming...</h2>
          <p className="mt-2 text-lg tracking-wider leading-8 text-gray-600 border-b border-gray-200 mx-auto pb-5">
            Check out any events or opportunities you don't want to miss.
          </p>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h3 className="text-base font-semibold tracking-wide leading-7 text-gray-900 border-l-8 border-indigo-800 px-3">Socials and Events</h3>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {upcoming.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between ">
              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                  <img className="darkbg rounded-2xl transition-all hover:scale-105 duration-300 ease-out object-cover w-96 h-60" src={post.slideImg} alt="" />
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
                <p className="mt-5 tracking-wider line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-32 text-3xl subheaderstyle tracking-tight text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out">Recent Meetings</h2>
          <p className="mt-2 text-lg tracking-wide leading-8 text-gray-600 border-b border-gray-200 mx-auto pb-5">
            Check out any events or opportunities you may have missed.
          </p>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h3 className="text-base font-semibold leading-7 tracking-wider text-gray-900 border-l-8 border-indigo-800 px-3">General Body Meetings</h3>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {gbmposts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                  <img className="darkbg transition-all hover:scale-105 duration-300 ease-out rounded-2xl w-full h-auto"src={post.slideImg} alt="" />
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
                <p className="mt-5 tracking-wider line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Fat Meetings */}

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h3 className="text-base font-semibold tracking-wide leading-7 text-gray-900 border-l-8 border-x-indigo-800 px-3">Freshman Action Team Meetings</h3>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {fatposts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                  <img className="darkbg rounded-2xl transition-all hover:scale-105 duration-300 ease-out object-cover w-full h-auto" src={post.slideImg} alt="" />
                </a>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 tracking-wider"
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
                <p className="mt-5 tracking-wider line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
