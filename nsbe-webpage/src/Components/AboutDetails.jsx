import React from 'react'
import { Link } from 'react-router-dom'
import topvphotos from '../assets/Officers/New_Officer_Photos/TopV.jpg'

const image = [
    {
        id: 1,
        name: 'TOP V Photo',
        src: topvphotos,
    },
]
export default function AboutDetails() {
    return (
        <>
            <div className="purple-bg pt-56 sm:pt-40 pb-48">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className=" mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:gap-x-16 mb-auto">
                            <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-auto darkbg">
                                <img
                                    src={image[0].src}
                                    alt={image[0].name}
                                    className="h-full w-full object-cover object-center transition-all hover:scale-110 duration-300 ease-out"
                                />
                            </div>
                            <div className="h-64 sm:h-80 lg:order-last lg:h-auto">
                                <h2 className="text-center text-3xl font-normal leading-8 mt-1 tracking-wider text-black mx-auto pt-5 ">
                                    Who Are We?
                                </h2>
                                <h1 className='ml-5 text-6xl headerstyle font-black pb-10 transition-all hover:scale-105 duration-300 ease-out'>About Us</h1>
                                <p className='text-black text-lg border-l-8 rounded-2xl darkbg border-orange-700 p-5 bg-orange-50 tracking-wide font-medium'>
                                    <span className='text-2xl inline-block rounded-md pl-2 pr-1 startl'>O</span>ur mission is to increase the number of culturally responsible Black engineers excelling academically, succeeding professionally, and positively impacting the community. We offer resources for academic excellence, professional development, leadership, and mentorship. Through study groups, career fairs, social events, and community service projects, we create an inclusive environment for students to thrive and connect.
                                </p>
                                <Link href="https://www.instagram.com/nsbe.official/" class="ml-3 mt-10 block w-fit rounded-md px-16 py-3 text-center text-sm font-semibold text-white startm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 buttondarkbg transition-all hover:scale-105 duration-300 ease-out">Fund NSBE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}