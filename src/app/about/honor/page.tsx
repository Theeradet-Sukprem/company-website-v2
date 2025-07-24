'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'
import AboutTab from '@/components/about-tab/AboutTab'
import Header from '@/components/Header'

export default function page() {
    const pathname = usePathname()

    const tabs = [
        { label: 'Profile', path: '/about' },
        { label: 'Honor', path: '/about/honor' },
    ]

    const honor = [
        { title: 'Q Mark', img: '/honor/honor1.png' },
        { title: 'ISO 9001 (2015)', img: '/honor/honor2.png' },
    ]

    return (
        <div>
            <Header />
            <AboutTab />

            <section className="px-4 md:px-40 lg:px-80 py-12 bg-white">
                <h1 className="text-3xl font-bold text-[var(--one-pink)] mb-6">HONORARY AWARD</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                    {honor.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-4" >
                            <img src={item.img} alt={item.title} className="w-full max-w-xs object-contain border rounded shadow" />
                            <p className="mt-4 text-xl font-bold text-gray-700">{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    )
}
