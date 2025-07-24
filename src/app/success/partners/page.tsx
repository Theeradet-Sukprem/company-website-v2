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
                <h1 className="font-bold text-2xl tracking-wider mb-10">PARTNERS</h1>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
                        {[
                            '/partners/flash-express.png',
                            '/partners/all-now.png',
                            '/partners/cp-ram.png',
                            '/partners/j&t-express.png',
                            '/partners/makro-logo.png',
                            '/partners/cj-more.png',
                            '/partners/tdm-logo.png',
                            '/partners/best-inc-logo.jpg',
                            '/partners/cpf-logo.png',
                            '/partners/spx-express.png',
                        ].map((logo, i) => (
                            <div
                                key={i}
                                className="bg-white shadow-md rounded-md flex items-center justify-center aspect-[4/3] w-full max-w-[200px] mx-auto hover:scale-105 transition-transform"
                            >
                                <img
                                    src={logo}
                                    alt={`Partner ${i + 1}`}
                                    className="max-h-[60%] max-w-[80%] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
