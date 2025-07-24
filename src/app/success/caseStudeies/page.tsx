'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SuccessTab from '@/components/success-tab/SuccessTab'

const data = [
    {
        name: 'Leisure Food Selection',
        desc: 'Integrated warehousing and delivery service across regions',
        img: '/wireframe/img.jpg',
    },
    {
        name: 'Mars',
        desc: 'Full supply chain logistics service',
        img: '/wireframe/img.jpg',
    },
    {
        name: 'Mixue Bingcheng',
        desc: 'Urban distribution service',
        img: '/wireframe/img.jpg',
    },
    {
        name: 'ChaPanda',
        desc: 'Integrated warehousing and delivery service',
        img: '/wireframe/img.jpg',
    },
    {
        name: 'Nayuki Tea',
        desc: 'Integrated warehousing and delivery service',
        img: '/wireframe/img.jpg',
    },
    {
        name: 'AUNTEA JENNY',
        desc: 'Multi-temperature integrated logistics service',
        img: '/wireframe/img.jpg',
    },
    {
        name: 'C-Store',
        desc: 'Urban delivery service in East China',
        img: '/wireframe/img.jpg',
    },
    {
        name: '7-Eleven',
        desc: 'Urban delivery service in South China',
        img: '/wireframe/img.jpg',
    },
]

export default function Page() {
    return (
        <div className='bg-white'>
            <Header />
            <SuccessTab />
            <section className="container mx-auto px-4 py-25 max-w-7xl ">
                <h1 className="font-bold text-2xl tracking-wider mb-10">COOPERATION CASE</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white flex flex-col h-full"
                        >
                            <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />

                            <div className="flex flex-col justify-between flex-1 p-4">
                                <div className="mb-4">
                                    <h3 className="text-lg font-medium text-gray-800 mb-1">{item.name}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>

                                <div className="mt-auto">
                                    <button className="w-full text-pink-600 border border-pink-600 px-4 py-1 rounded hover:bg-[var(--one-pink)] hover:text-white">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <Footer />
        </div>
    )
}
