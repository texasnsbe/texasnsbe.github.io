export default function HeroSect() {
  return (
    <div className="purple-bg py-40 sm:py-8">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 ">
        <div className=" darkbg relative isolate overflow-hidden bg-gray-900 px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={712} cx={612} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="1" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#1a1a1a" />
                <stop offset={1} stopColor="#027912" />
              </radialGradient>
            </defs>
          </svg>
          <div className=" mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
            <h1 className="text-6xl herostyle transition-all hover:scale-105 duration-300 ease-out text-white ">
              Welcome to NSBE!
            </h1>
            <h3 className="text-lg pt-3 font-bold tracking-tight text-white sm:text-xl">
              National Society of Black Engineers
            </h3>
            <p className="mt-9 text-2xl leading-8 text-gray-300">
              <span className="excelstyle">Excel. </span>
              <span className="succeedstyle">Succeed. </span>
              <span className="impactstyle">Impact.</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/about"
                className="transition-all hover:scale-105 buttondarkbg rounded-lg px-8 py-2.5 text-sm font-semibold hover:bg-indigo-500 hover:text-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                About Us
              </a>
              <a href="#" className="transition-all hover:scale-105 text-md px-3 font-semibold leading-6 text-white">
                Our Newsletter <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://i.imgur.com/wPHnHQX.jpeg"
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-xl shadow-2xl ring-1 ring-white/10 "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
