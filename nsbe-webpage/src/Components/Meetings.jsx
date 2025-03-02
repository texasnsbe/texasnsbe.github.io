import gbmposts from "../assets/HomeEvents/gbm.js";

export default function Meetings() {
  return (
    <div className="flex justify-center lg:mx-[12.5vw] py-[5vh]">
      <div className="flex flex-col">
        <p className="miniheader sm:text-xl font-semibold tracking-wider leading-relaxed text-black">
          Missed the Meeting?
        </p>
        <h2 className="mb-3 subheaderstyle text-gray-900 transition-all hover:scale-105 duration-300 ease-out">
          Recent GBMs
        </h2>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-x-8 gap-y-24">
          {gbmposts.map((post) => (
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              key={post.date}
            >
              <article className="flex flex-col justify-between">
                <div>
                  <time className="text-white font-semibold text-xl">
                    {post.date}
                  </time>
                </div>
                <div className="my-5">
                  <img
                    className="max-lg:h-[40vh] max-lg:w-[60vw] max-md:h-[35vh] max-sm:h-[35vh] max-sm:w-[90vw] object-cover darkbg transition-all hover:scale-105 duration-300 ease-out rounded-2xl"
                    src={post.slideImg}
                    loading="lazy"
                    alt={post.title}
                  />
                </div>
                <div className="w-full text-black border-l-8 rounded-2xl darkbg border-orange-700 p-[2.5vh] bg-orange-50">
                  <h3 className="text-xl font-bold leading-6">{post.title}</h3>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
