import ImageSwapper from '../Components/ImageSwapper'
import images from '../Components/ImageSwapper'
import groupPic from '../assets/EventPhotos/EventImages/GroupPic.jpg'
import LoopingVideo from './LoopingVideo'

export default function HeroSect() {
  return (
    <div className="purple-bg py-40 sm:py-8">
      <div className="mx-auto max-w-7xl py-24 sm:px-6  sm:py-32 lg:px-8 ">
        <div className=" darkbg relative isolate overflow-hidden border-l-8 border-orange-700 bg-orange-50 px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={600} cx={600} cy={20} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#" />
              </radialGradient>
            </defs>
          </svg>
          <div className=" mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
            <h3 className="text-lg pb-3 font-bold tracking-wider startm sm:text-xl">
              National Society of Black Engineers
            </h3>
            <h1 className="text-6xl pb herostyle tracking-tight transition-all hover:scale-105 duration-300 ease-out text-white">
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
              {/* <a href="#" className="transition-all tracking-wider hover:scale-105 text-md px-3 font-semibold leading-6 text-white">
                Our Newsletter <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
            <LoopingVideo />
        </div>
      </div>
    </div>
  )
}
