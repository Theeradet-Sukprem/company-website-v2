'use client'

import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfoTab from '@/components/info-tab/InfoTab'

interface NewsItem {
    title: string;
    date: string;
    img: string;
}

export default function page() {
    const [newsList, setNewsList] = useState<NewsItem[]>([]);

    useEffect(() => {
        fetch('/api/news.json')
            .then((res) => res.json())
            .then((data: NewsItem[]) => setNewsList(data))
            .catch((err) => console.error('Error loading news:', err));
    }, []);

    return (
        <div className='bg-white'>
            <Header />
            <InfoTab />
            <section className="relative bg-cover py-25 bg-center">
                <div className="absolute inset-0 backdrop-blur-md"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <h2 className="text-black text-2xl mb-5 tracking-wide font-bold">New Event</h2>
                    <div className="flex justify-between items-center mb-10">
                        <h4 className="text-lg font-semibold">List Event</h4>
                        <a href="#" className="text-sm underline hover:text-[var(--one-pink)]">More News &gt;&gt;</a>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 items-start">
                        {/* Main Event */}
                        <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/wireframe/img.jpg"
                                alt="Featured"
                                className="w-full h-[325px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Main Event</h3>
                                <p className="text-sm text-gray-500 mt-2">2025-06-20</p>
                            </div>
                        </div>

                        {/* News List */}
                        <div className="space-y-4 text-black mt-6 lg:mt-0">
                            {newsList.map((news, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-center hover:bg-[var(--one-pink)] hover:text-white p-2 rounded transition"
                                >
                                    <img
                                        src={news.img}
                                        alt="thumb"
                                        className="w-20 h-14 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium ">{news.title}</p>
                                        <p className="text-xs text-gray-300">{news.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative bg-cover py-25 bg-center">
                <div className="absolute inset-0 backdrop-blur-md"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <h2 className="text-black text-2xl mb-5 tracking-wide font-bold">Industry news</h2>
                    <div className="flex justify-between items-center mb-10">
                        <h4 className="text-lg font-semibold">List Event</h4>
                        <a href="#" className="text-sm underline hover:text-[var(--one-pink)]">More News &gt;&gt;</a>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 items-start">
                        {/* Main Event */}
                        <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/wireframe/img.jpg"
                                alt="Featured"
                                className="w-full h-[325px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Main Event</h3>
                                <p className="text-sm text-gray-500 mt-2">2025-06-20</p>
                            </div>
                        </div>

                        {/* News List */}
                        <div className="space-y-4 text-black mt-6 lg:mt-0">
                            {newsList.map((news, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-center hover:bg-[var(--one-pink)] hover:text-white p-2 rounded transition"
                                >
                                    <img
                                        src={news.img}
                                        alt="thumb"
                                        className="w-20 h-14 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium ">{news.title}</p>
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
