const stats = [
    { id: 1, caption: 'Transactions every 24 hours', header: 'Newsletter', link: 'https://www.instagram.com/ut_nsbe/' },
    { id: 2, caption: 'Assets under holding', header: 'QR Codes', link: 'https://www.instagram.com/ut_nsbe/'},
    { id: 3, caption: 'New users annually', header: 'Applications', link: 'https://www.instagram.com/ut_nsbe/' },
    { id: 4, caption: 'Transactions every 24 hours', header: 'Test Bank', link: 'https://www.instagram.com/ut_nsbe/' },
    { id: 5, caption: 'Assets under holding', header: 'Resume Drop', link: 'https://www.instagram.com/ut_nsbe/' },
    { id: 6, caption: 'New users annually', header: 'Volunteering', link: 'https://www.instagram.com/ut_nsbe/' },
]

export default function ResourceLinks() {
    return (
        <div className="purple-bg py-56 sm:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-center text-6xl headerstyle font-black pb-36">
                    Resources
                </h1>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-40 sm:grid-cols-3 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <a href={stat.link} key={stat.id}>
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.caption}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
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
