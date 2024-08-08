import React from 'react'

const Stats = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            <div className=" pt-12 sm:pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8 md:mb-12">
                            <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6">Get <span className='text-black font-extrabold'>Cover</span> Now</h2>

                            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Get affordable services tailor-made to suit your needs</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 pb-8 bg-white ">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 " />
                        <div className="relative max-w-7xl mx-auto">
                            <div className=" mx-auto">
                                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                    <div className="flex flex-col border-b border-gray-100 p-6 text-center items-center sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Members</dt>
                                        <dd className="order-1 text-5xl font-extrabold text-lime-600">1M</dd>
                                    </div>
                                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Country</dt>
                                        <dd className="order-1 text-5xl font-extrabold text-lime-600">40+</dd>
                                    </div>
                                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Services</dt>
                                        <dd className="order-1 text-5xl font-extrabold text-lime-600">24/7</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats