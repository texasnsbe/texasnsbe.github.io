import due_benefits from '../assets/due_benefits.js'
import tshirt from '../assets/Tshirt.jpg'

export default function PayDues() {
  return (
    <div className="py-[5vh]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
              <h2 className="miniheader sm:text-xl font-semibold tracking-wider leading-relaxed text-black">
                NSBE VIP
              </h2>
              <p className="subheaderstyle text-gray-900 transition-all hover:scale-105 duration-300 ease-out mb-10">
                Pay Dues
              </p>
              <dl className="mt-10 max-w-xl space-y-5 text-black border-l-8 rounded-2xl darkbg border-orange-700 p-7 bg-orange-50 tracking-wider leading-7 lg:max-w-none">
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  $25
                </p>
                {due_benefits.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-black">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-6 w-auto text-orange-700"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text text-black">
                      {feature.description}
                    </dd>
                  </div>
                ))}
                <a
                  href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc2rP4CcGY-RkZGd3M3lASSjejy1TgNu-l2nUIaqOjCXUIicw/viewform?usp=sf_link&pli=1"
                  class="block w-fit rounded-[24px] bg-orange-700 startm px-8 py-2 text-center font-semibold hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-105 duration-300 ease-out buttondarkbg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay Now
                </a>
              </dl> 
          </div>
          <img
            alt="T-shirt screenshot"
            src={tshirt}
            width={2432}
            height={1442}
            className="darkbg mt-10 w-[48rem] sm:w-[57rem] md:-ml-4 lg:-ml-0 transition-all hover:scale-105 duration-300 ease-out"
          />
        </div>
      </div>
    </div>
  );
}
