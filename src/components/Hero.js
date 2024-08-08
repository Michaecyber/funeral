import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div>
            <main className='max-w-screen-xl mx-auto px-4' >
                <div className="">
                    <div className="flex justify-between">
                        <div className='lg:max-w-2xl text-center lg:text-left'>
                            <div className=" mb-8 md:flex justify-center lg:justify-start">
                                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-200/10 hover:ring-gray-200/20">
                                    <span className="text-white">
                                        With over 100  years of Mutual Assurance.<br className="block sm:hidden" /> <Link to="#" className="font-semibold text-lime-400"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></Link>
                                    </span>
                                </div>
                            </div>
                            <div >
                                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">FUNERAL SERVICES</h1>
                                <p className="mt-6 text-sm sm:text-lg  text-gray-300 ">With over a tome of unexeptional funeral service response across South Africa, we're able to provide a comprehensive range of funeral services for everyone,
                                including Today's Hope Funeral Service members and non-members.</p>
                                <div className="mt-8 flex gap-x-4 justify-center lg:justify-start">
                                    <Link to="#" className="inline-block rounded-lg bg-lime-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-lime-600 hover:bg-lime-700 hover:ring-lime-700">
                                        Claim Now
                                        <span className="text-indigo-200" aria-hidden="true">&rarr;</span>
                                    </Link>
                                    <Link to="#" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-gray-200/10 hover:ring-gray-200/20">
                                        Book Now
                                        <span className="text-white" aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className=' hidden lg:block  h-[400px] rounded-lg shadow-md' src="/bnr.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Hero