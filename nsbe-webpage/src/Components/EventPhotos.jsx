import React from 'react'

const image = [
    {
        id: 1,
        name: 'Woman holding a mug',
        src: 'https://i.imgur.com/mqpwdKt.png',
    },
    {
        id: 2,
        name: 'Woman holding a mug',
        src: 'https://i.imgur.com/YvNlQAb.png',
    },
]
export default function EventPhotos() {
    return (
        <>
            <div className="purple-bg pt-4 pb-4 sm:pt-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:gap-x-16">
                            <div className="h-max overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-auto transition-all hover:scale-105 duration-300 ease-out">
                                <img
                                    src={image[0].src}
                                    alt={image[0].name}
                                    className="h-max w-full object-cover object-center"
                                />
                            </div>
                            <div className="h-max overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-auto transition-all hover:scale-105 duration-300 ease-out">
                                <img
                                    src={image[1].src}
                                    alt={image[1].name}
                                    className="h-max w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}