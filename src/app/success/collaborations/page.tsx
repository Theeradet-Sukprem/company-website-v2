'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SuccessTab from '@/components/success-tab/SuccessTab'

export default function page() {
    return (
        <div className='bg-white'>
            <Header />
            <SuccessTab />
            <section className="container mx-auto px-4 py-25 max-w-7xl ">
                <h1 className="font-bold text-2xl tracking-wider mb-10">Cooperation Intention</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT: Text Block */}
                    <div>
                        <div className="grid grid-cols-3 gap-6 text-center text-orange-600 font-semibold text-xl">
                            <div>
                                <div className="text-2xl">7</div>
                                <div className="text-sm text-gray-600">Company History</div>
                            </div>
                            <div>
                                <div className="text-2xl">50</div>
                                <div className="text-sm text-gray-600">Sales</div>
                            </div>
                            <div>
                                <div className="text-2xl">3</div>
                                <div className="text-sm text-gray-600">Storage area</div>
                            </div>
                            <div>
                                <div className="text-2xl">300+</div>
                                <div className="text-sm text-gray-600">Transport vehicles</div>
                            </div>
                            <div>
                                <div className="text-2xl">30+</div>
                                <div className="text-sm text-gray-600">Number of Employees</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="flex justify-center">
                        <img
                            src="/wireframe/img.jpg"
                            alt="corporation building"
                            className="rounded-md shadow-md w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 py-25 max-w-7xl">
                    <div className='text-2xl font-bold'>A professional logistics service provider focusing on food retail</div>
                    <br />
                    <div>Shangjia Logistics integrates warehousing, transportation and distribution resources (including trunk lines + urban transportation to stores + home delivery), and provides one-stop logistics fulfillment services such as commodity management, order production, logistics distribution, reverse logistics, QA quality control, etc. under multiple sales formats including B2B, B2C, online and offline retail stores, dealerships and distribution according to personalized specific business needs.</div>
                </div>
            </section>

            <section className="px-4 md:px-40 lg:px-80 py-20 bg-white text-center">
                <h2 className="text-2xl font-bold mb-12 text-gray-800">Cooperation Process</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                        {
                            icon: '/icons/step1.svg',
                            title: 'Cooperation consultation',
                            desc: 'Inform cooperation needs and communicate by phone',
                            highlight: false,
                        },
                        {
                            icon: '/icons/step2.svg',
                            title: 'Details to discuss',
                            desc: 'Inspect the headquarters and warehousing and transportation,\ntwo-way inspection',
                            highlight: true,
                        },
                        {
                            icon: '/icons/step3.svg',
                            title: 'Signing a contract',
                            desc: 'In-depth communication and senior legal advisory services',
                            highlight: false,
                        },
                        {
                            icon: '/icons/step4.svg',
                            title: 'Operation preparation',
                            desc: 'Dedicated personnel, customized operation plan',
                            highlight: false,
                        },
                        {
                            icon: '/icons/step5.svg',
                            title: 'Operations management',
                            desc: 'Process, standardization, and procedure improvement operations',
                            highlight: false,
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className='flex flex-col items-center p-6 rounded-lg transition hover:shadow-lg hover:border-gray-200'
                        >
                            <div
                                className='w-16 h-16 rounded-full flex items-center justify-center mb-4'
                            >
                                <img src="/wireframe/img.jpg" alt="" className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <hr className="w-6 border-t-2 border-gray-400 mb-2" />
                            <p className="text-sm text-gray-600 whitespace-pre-line">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <h2 className="text-2xl font-bold mb-10">Contact us</h2>

                    {/* Form */}
                    <form className="space-y-6">
                        {/* Row 1: Company, Name, Position, Telephone */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Company Name <span className="text-red-500">*</span>
                                </label>
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Position <span className="text-red-500">*</span>
                                </label>
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Telephone <span className="text-red-500">*</span>
                                </label>
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
                            </div>
                        </div>

                        {/* Cooperation intention */}
                       

                        {/* Captcha and Submit */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-center gap-4 w-full md:w-2/3">
                                <input
                                    type="text"
                                    placeholder="enter confirmation code"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-2 rounded w-full md:w-auto"
                            >
                                Submit Information
                            </button>
                        </div>
                    </form>
                </div>
            </section>


            <Footer />
        </div>
    )
}
