import React from 'react'
import { Link } from 'react-router-dom'

const image = [
    {
        id: 1,
        name: 'TOP V Photo',
        src: 'https://i.imgur.com/SOfAphC.jpeg',
    },
]
export default function AboutDetails() {
    return (
        <>
            <div className="purple-bg pt-56 sm:pt-40 pb-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:gap-x-16">
                            <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-auto darkbg">
                                <img
                                    src={image[0].src}
                                    alt={image[0].name}
                                    className="h-full w-full object-cover object-center "
                                />
                            </div>
                            <div className="h-64 overflow-hidden sm:h-80 lg:order-last lg:h-auto">
                                <h1 className='ml-1 text-6xl headerstyle font-black pb-10'>About Us</h1>
                                <p className='text-lg tracking-wide font-medium'>
                                    <span className='text-2xl inline-block border-l-8 border-indigo-800 pl-2 font-semibold'>O</span>ur mission is to increase the number of culturally responsible Black engineers excelling academically, succeeding professionally, and positively impacting the community. We offer resources for academic excellence, professional development, leadership, and mentorship. Through study groups, career fairs, social events, and community service projects, we create an inclusive environment for students to thrive and connect.
                                </p>
                                <Link href="https://give.utexas.edu/?menu=OGPENCS&solicit=ESL&response=DJ0ESL=ENDS&comments=National%20Society%20of%20Black%20Engineers%20%28NSBE%29%20Account:%2030-2116-8093" class="ml-1 mt-10 block w-fit rounded-md bg-indigo-600 px-16 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 buttondarkbg">Fund Our Mission</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}