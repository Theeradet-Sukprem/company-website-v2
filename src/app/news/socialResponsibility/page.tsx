'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfoTab from '@/components/info-tab/InfoTab'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        image: "/wireframe/img.jpg",
        title: "News on cooperation and partnership...",
        date: "2024-04-30",
        type: "news"
    },
    {
        id: 2,
        image: "/wireframe/img.jpg",
        title: "Logistics services in the era of...",
        date: "2023-04-13",
        type: "news"
    },
    {
        id: 3,
        image: "/wireframe/img.jpg",
        title: "Green logistics solutions...",
        date: "2022-12-21",
        type: "featured"
    },
    {
        id: 4,
        image: "/wireframe/img.jpg",
        title: "Industrial development initiatives...",
        date: "2022-12-15",
        type: "featured"
    },
    {
        id: 5,
        image: "/wireframe/img.jpg",
        title: "Sustainable logistics transformation",
        date: "2022-11-29",
        type: "news"
    },
    {
        id: 6,
        image: "/wireframe/img.jpg",
        title: "Community development programs...",
        date: "2022-05-27",
        type: "featured"
    },
    {
        id: 7,
        image: "/wireframe/img.jpg",
        title: "Leading innovation and development...",
        date: "2022-05-13",
        type: "news"
    },
    {
        id: 8,
        image: "/wireframe/img.jpg",
        title: "Sustainable development initiatives...",
        date: "2022-05-01",
        type: "news"
    },
    {
        id: 9,
        image: "/wireframe/img.jpg",
        title: "Environmental protection programs...",
        date: "2022-04-27",
        type: "news"
    },
    {
        id: 10,
        image: "/wireframe/img.jpg",
        title: "Community safety and protection...",
        date: "2022-04-20",
        type: "news"
    },
    {
        id: 11,
        image: "/wireframe/img.jpg",
        title: "Clean and safe environmental...",
        date: "2022-04-12",
        type: "news"
    },
    {
        id: 12,
        image: "/wireframe/img.jpg",
        title: "Family protection and support...",
        date: "2022-02-22",
        type: "news"
    }
];

export default function page() {
    return (
        <div className='bg-white'>
            <Header />
            <InfoTab />

            <div className="container mx-auto px-4 py-25 max-w-7xl ">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Social Responsibility
                    </h1>
                    <p className="text-orange-600 text-lg">
                        Corporate Social Responsibility
                    </p>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-2 gap-0 mb-12">
                    {/* Left Hero Card */}
                    <div className="relative bg-gray-100 overflow-hidden">
                        <img
                            src="/wireframe/img.jpg"
                            alt="Team collaboration"
                            className="w-full h-64 object-cover mb-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h2 className="text-2xl font-bold mb-2">
                                Employee Responsibility
                            </h2>
                            <p className="text-sm leading-relaxed">
                                Our commitment to employee welfare and development forms the foundation of our social responsibility initiatives. We provide comprehensive training programs, ensure workplace safety, and promote professional growth opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Right Hero Card */}
                    <div className="relative bg-gradient-to-br from-yellow-300 to-orange-400 overflow-hidden">
                        <img
                            src="/wireframe/img.jpg"
                            alt="Caring hands"
                            className="w-full h-64 object-cover mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h2 className="text-2xl font-bold mb-2">
                                Community Responsibility
                            </h2>
                            <p className="text-sm leading-relaxed">
                                We actively engage with local communities through various social impact programs and initiatives. Our focus on sustainable development includes supporting education, healthcare, and environmental conservation projects. We believe in creating positive change that extends beyond our business operations, contributing to the well-being of society and fostering long-term community partnerships that drive mutual growth and prosperity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {newsItems.slice(0, 9).map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-52 object-cover "
                                />
                                {item.type === 'featured' && (
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-red-600 text-white px-2 py-1 text-xs rounded">
                                            Featured
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {/* <div className="flex justify-center items-center gap-2">
                    <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-orange-500 text-white">
                        01
                    </button>
                    <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                        02
                    </button>
                    <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div> */}
            </div>

            <Footer />
        </div>
    )
}