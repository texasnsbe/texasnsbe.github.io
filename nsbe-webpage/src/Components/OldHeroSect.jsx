import LoopingVideo from './LoopingVideo'

export default function OldHeroSect() {
  return ( 
    <div className=""> {/* purple-bg pt-40 sm:pt-8 */}
      <div className=""> {/*  mx-auto max-w-8xl py- sm:px-6 sm:py-32 lg:px-8 */}
        <div className="hero-padding darkbg overflow-hidden border-l-8 border-orange-700  px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
            <h3 className="text-lg pb-3 font-bold tracking-wider startm sm:text-xl">
              National Society of Black Engineers
            </h3>
            <h1 className="text-6xl herostyle tracking-tight transition-all hover:scale-105 duration-300 ease-out text-white">
              Welcome to NSBE!
            </h1>
            <p className="mt-9 text-2xl tracking-wider leading-8 text-gray-300">
              <span className="excelstyle">Excel. </span>
              <span className="succeedstyle">Succeed. </span>
              <span className="impactstyle">Impact.</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/about"
                className="transition-all tracking-wider hover:scale-105 buttondarkbg rounded-lg px-8 py-2.5 startm font-semibold hover:bg-orange-700 hover:text-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                About Us
              </a>
            </div>
          </div>
            <LoopingVideo />
        </div>
      </div>
    </div>
  )
}
