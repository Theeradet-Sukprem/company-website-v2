'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function page() {
    return (
        <div>
            <Header />

            <section
                className="relative py-35 bg-cover bg-center"
                style={{ backgroundImage: "url('/bg/bg-information.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <h2 className="text-center text-white text-2xl mb-10 tracking-wide">NEWS</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="/news/event1.jpg" alt="Main-Event" className="w-full h-[300px] object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Main Event</h3>
                                <p className="text-sm text-gray-500 mt-2">2025-06-20</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-white">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-lg font-semibold">List Event</h4>
                                <a href="#" className="text-sm underline hover:text-[var(--one-pink)]">More News &gt;&gt;</a>
                            </div>

                            {[
                                { title: 'Event 1', date: '2025-06-13', img: '/news/n1.jpg' },
                                { title: 'Event 2', date: '2025-05-30', img: '/news/n2.jpg' },
                                { title: 'Event 3', date: '2025-05-15', img: '/news/n3.jpg' },
                                { title: 'Event 4', date: '2025-04-30', img: '/news/n4.jpg' },
                                { title: 'Event 5', date: '2025-04-21', img: '/news/n5.jpg' },
                            ].map((news, i) => (
                                <div key={i} className="flex gap-4 items-center hover:bg-white/10 p-2 rounded transition">
                                    <img src={news.img} alt="thumb" className="w-20 h-14 object-cover rounded" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{news.title}</p>
                                        <p className="text-xs text-gray-300">{news.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
