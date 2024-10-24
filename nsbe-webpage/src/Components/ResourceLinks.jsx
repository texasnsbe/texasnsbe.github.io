import resources from '../assets/resources.js'

export default function ResourceLinks() {
    return (
        <div className="purple-bg py-56 sm:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-normal leading-8 mt-1 tracking-wider text-black mx-auto pt-5 ">
                    Can NSBE Get Any Better?
                </h2>
                <h1 className="text-center text-6xl headerstyle font-black pb-36 transition-all hover:scale-105 duration-300 ease-out">
                    Resources
                </h1>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-40 sm:grid-cols-3 text-center lg:grid-cols-3">
                    {resources.map((stat) => (
                        <a href={stat.link} key={stat.id}>
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 ">
                                <dt className="text-xl leading-7 text-white">{stat.caption}</dt>
                                <dd className="order-first subheaderstyle font-semibold tracking-tight text-gray-900 sm:text-5xl transition-all hover:scale-125 duration-300 ease-out">
                                    {stat.header}
                                </dd>
                            </div>
                        </a>
                    ))}
                </dl>
            </div>
        </div>
    )
}
