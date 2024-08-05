import resources from '../assets/resources.js'

export default function ResourceLinks() {
    return (
        <div className="purple-bg py-56 sm:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-center text-6xl headerstyle font-black pb-36 transition-all hover:scale-105 duration-300 ease-out">
                    Resources
                </h1>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-40 sm:grid-cols-3 text-center lg:grid-cols-3">
                    {resources.map((stat) => (
                        <a href={stat.link} key={stat.id}>
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 ">
                                <dt className="text-base leading-7 text-gray-600">{stat.caption}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl transition-all hover:scale-125 duration-300 ease-out">
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
