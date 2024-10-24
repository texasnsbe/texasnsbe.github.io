import nsbelogo from "../assets/nsbelogo"
import upcoming from "../assets/HomeEvents/upcoming.js"
import gbmposts from "../assets/HomeEvents/gbm.js"
import fatposts from "../assets/HomeEvents/fat.js"

export default function Meetings() {
  return (

    <div className="purple-bg py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-2 font-semibold text-lg tracking-wider leading-8 text-black mx-auto">
            Upcoming NSBE Events
          </p>
          <h2 className="text-3xl subheaderstyle text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out pb-10">New Events</h2>
          
        </div>
        
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {upcoming.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between  ">

              <div className="flex items-center gap-x-4  text-lg">
                <time dateTime={post.datetime} className="text-white">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10  px-3 py-1.5 font-medium "
                >
                </a>
              </div>

              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                  <img className="darkbg transition-all hover:scale-105 duration-300 ease-out rounded-2xl h-[14.5rem] w-[32rem] md:h-[14rem] md:w-[32rem] sm:h-[20rem] sm:w-full object-cover" src={post.slideImg} alt="" />
                </a>
              </div>

              <div className="group relative w-full">
                <h3 className="mt-3 text-2xl font-bold leading-6 text-black border-l-8 rounded-2xl darkbg border-orange-700 p-5 bg-orange-50 ">
                  <a href={post.href}>
                    <span className="absolute inset-0 " />
                    {post.title}
                  </a>
                </h3>
              </div>

            </article>
          ))}
        </div>

        <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="mt-32 font-semibold text-lg tracking-wider leading-8 text-black mx-auto">
            Missed the meeting? Don't worry!
          </p>
          <h2 className=" text-3xl subheaderstyle tracking-tight text-white sm:text-7xl transition-all hover:scale-105 duration-300 ease-out mb-10">Recent GBMs</h2>
          
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {gbmposts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">

              <div className="flex items-center gap-x-4  text-lg">
                <time dateTime={post.datetime} className="text-white">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10  px-3 py-1.5 font-medium "
                >
                </a>
              </div>

              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                <img className="darkbg transition-all hover:scale-105 duration-300 ease-out rounded-2xl h-[14.5rem] w-[32rem] md:h-[14rem] md:w-[32rem] sm:h-[20rem] sm:w-full object-cover" src={post.slideImg} alt="" />
                </a>
              </div>

              <div className="group relative w-full">
                <h3 className="mt-3 text-2xl font-bold leading-6text-black border-l-8 rounded-2xl darkbg border-orange-700 p-5 bg-orange-50">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Fat Meetings */}

        <div className="mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-2 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {fatposts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">

              <div className="flex items-center gap-x-4 mt-5 text-lg">
                <time dateTime={post.datetime} className="text-white">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10  px-3 py-1.5 font-medium "
                >
                </a>
              </div>

              <div className="relative w-full items-center gap-y-5 lg:flex my-4 ">
                <a href={post.href}>
                <img className="darkbg transition-all hover:scale-105 duration-300 ease-out rounded-2xl h-[14.5rem] w-[32rem] md:h-[14rem] md:w-[32rem] sm:h-[20rem] sm:w-full object-cover" src={post.slideImg} alt="" />
                </a>
              </div>
              
              <div className="group relative w-full">
                <h3 className="mt-3 text-2xl font-bold leading-6 text-black border-l-8 rounded-2xl darkbg border-orange-700 p-5 bg-orange-50">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 tracking-wider line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
