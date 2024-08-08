import React from 'react'

const BlogCard = () => {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">With Todays Hope Funeral service Family Comes First</h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">THFS is a mutual society, which means that all our surplus profits are given back to our loyal members (policyholders) who choose to insure or save with THFS. <br/> We share our profits with our members in the form of FREE funeral benefits* from THFS Funeral Service as well as other special member benefits*. </p>
                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8 items-center justify-center ">

                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="/funeral2.jpg" loading="lazy" alt="Photo by tudays hope funeral service" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">Cashback Funeral Insurance</a>
                                </h2>

                                <p className="text-gray-500 mb-8">Not only will you be saving for the expenses of a funeral, but we’ll give you a whole year’s premiums back in cash after every five uninterrupted claim-free years.</p>


                            </div>
                        </div>

                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="/ones.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">Arranging a Funeral</a>
                                </h2>

                                <p className="text-gray-500 mb-8">Arranging a Funeral can be hard when you just lost a loved one. <br/> At THFS we provide an easy way to help you through the process.</p>


                            </div>
                        </div>

                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="/memorial.webp" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">A Space to Say GoodBye</a>
                                </h2>

                                <p className="text-gray-500 mb-8">Lay your loved ones to rest in safe, serene, beautiful encouraging refreshing surrounded by loved ones</p>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard