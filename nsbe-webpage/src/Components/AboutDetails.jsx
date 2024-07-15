import React from 'react'
import { Link } from 'react-router-dom'

const image = [
    {
        id: 1,
        name: 'Woman holding a mug',
        src: 'https://i.imgur.com/wPHnHQX.jpeg',
    },
]
export default function AboutDetails() {
    return (
        <>
            <div className="bg-white pt-36 pb-24 sm:pt-60">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:gap-x-16">
                            <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-auto">
                                <img
                                    src={image[0].src}
                                    alt={image[0].name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-auto">
                                <h1 className='text-6xl font-serif font-black pb-10'>The Team</h1>
                                <p>
                                Welcome to the National Society of Black Engineers (NSBE) at the University of Texas at Austin! Our team is dedicated to fulfilling the NSBE mission: "To increase the number of culturally responsible Black Engineers who excel academically, succeed professionally, and positively impact the community." We strive to be the best place for students to find opportunities and build a strong community. By offering resources for academic excellence, professional development, leadership roles, and mentorship programs, we ensure our members are well-prepared for their future careers. Through study groups, career fairs, social events, and community service projects, we create an inclusive environment where students can thrive and connect.
                                </p>
                                <Link href="https://give.utexas.edu/?menu=OGPENCS&solicit=ESL&response=DJ0ESL=ENDS&comments=National%20Society%20of%20Black%20Engineers%20%28NSBE%29%20Account:%2030-2116-8093" class="mt-10 block w-fit rounded-md bg-indigo-600 px-16 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Fund Our Mission</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}