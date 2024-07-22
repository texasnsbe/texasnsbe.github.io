import { CheckBadgeIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'FREE MERCH!',
    description:
      'Every member gets free merch!',
    icon: CheckBadgeIcon,
  },
  {
    name: 'MEMBERSHIP PRIORITY!',
    description: 'When ever applying to any scholarships, confrences: AfroTech & NSBE Nationals, and leaddship positions, your application will be prioritized. ',
    icon: CheckBadgeIcon,
  },
  {
    name: 'FOOD!',
    description: 'At the end of every meeting, be the first ones to eat... if not, we maye be all out :(',
    icon: CheckBadgeIcon,
  },
]

export default function PayDues() {
  return (
    <div className="overflow-hidden purple-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Due Payment</h2>
              <p className="mt-2 text-3xl headerstyle  text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out">Haven't Paid Your Dues?</p>
              <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">$20</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Paying your dues enables <span className="text-black font-semibold text-600">NSBE to give back</span>  to our community through various socials, meetings, and more!
              </p>
              <dl className="mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-6 w-auto text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
                <a href="#" class="mt-10 block w-fit rounded-md bg-indigo-600 px-16 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all hover:scale-105 duration-300 ease-out buttondarkbg">Pay Now</a>
              </dl>
            </div>
          </div>
          <img
            alt="T-shirt screenshot"
            src="https://i.imgur.com/O1p3f0N.png"
            width={2432}
            height={1442}
            className="darkbg w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 transition-all hover:scale-105 duration-300 ease-out"
          />
        </div>
      </div>
    </div>
  )
}
