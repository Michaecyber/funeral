import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaSnapchatGhost, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import ReactFontawesome from "fa-react-icon";
const Footer = () => {
    return (
        <div>
            <footer aria-label="Site Footer" className="bg-white className='mt-16 border-t border-gray-100 pt-8'">
                <div className="max-w-screen-xl px-4  pb-8 mx-auto sm:px-6 lg:px-8 ">

                    {/* <div className=" flex pt-8  border-t border-gray-100  sm:items-center sm:justify-between lg:mt-16 ">
                        <div>
                            <h2>CoDify</h2>
                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur harum unde quasi repellendus voluptatem qui similique laboriosam voluptatibus, omnis fuga ducimus minima deserunt, nemo labore, blanditiis iure ad saepe? Dolorum?
                            </p>

                        </div>
                        <div>
                            <h3>Stay up to date</h3>
                            <p>Get notified when I publish something new, and unsubscribe at any time.</p>
                            <form className="sm:flex">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email-address"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                >
                                    Notify me
                                </button>
                            </form>
                        </div>


                    </div> */}
                    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                        <div className="mx-auto max-w-sm lg:max-w-none text-center">
                            <h1 className='text-lg uppercase font-extrabold text-center text-lime-600 lg:text-left'>Today's Hope Funeral Service </h1>
                            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
                            More often than not, the death of a loved one is the most unexpected event we face in the cycle of life. It is not easy to think about planning for a funeral. Taking a little time now and choose from our funeral insurance packages can give you great peace of mind, ensuring that you can have the funeral you want without placing a burden on your loved ones.
                            </p>
                            <div className='flex gap-5 text-gray-700 text-xl pt-4 justify-center sm:justify-start'>
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                                <FaSnapchatGhost />
                                <FaWhatsapp />
                            </div>

                        </div>

                        <div>

                            <div className="items-center justify-center">
                                <form className="sm:flex">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email-address"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full  px-5 py-3 border-2 border-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-lime-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                                    >
                                        Notify me
                                    </button>
                                </form>
                                <p className="mt-3 text-sm text-gray-500 ">
                                    We care about the protection of your data. Read our{' '}
                                    <a href="#" className="text-gray-700  font-medium underline">
                                        Privacy Policy.
                                    </a>
                                </p>
                                <p>
                                </p>
                                <p className="mt-3 text-sm text-gray-800 font-bold ">
                                Contact Us: +27 11 046 1896 <br /> Mobile: +27 82 711 4448  <br /> Address: 50 Juta And Station Streeet, Braamfontein, Johannesburg, RSA{' '}
                                <a href="#" className="text-blue-700  font-medium underline font-bold">
                                <br /> Email: mthupi1962@gmail.com
                                </a>
                            </p>
                            </div>
                        </div>

                    </div>
                </div>

            </footer >

        </div >
    )
}

export default Footer