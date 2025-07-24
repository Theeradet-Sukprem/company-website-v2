'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutTab from '@/components/about-tab/AboutTab'

export default function Page() {
    const pathname = usePathname()
    const [isPlaying, setIsPlaying] = useState(false)

    const tabs = [
        { label: 'Profile', path: '/about' },
        { label: 'Honor', path: '/about/honor' },
    ]

    const coreItems = [
        {
            title: 'Mission',
            description: 'Build a smart, simple, efficient and sustainable trucking service. To transform the logistics industry.',
            img: '/core/mission.jpg',
        },
        {
            title: 'Vision',
            description: 'Become a customer-centric freight forwarding platform the largest in the region.',
            img: '/core/vision.jpg',
        },
        {
            title: 'Objectives',
            description: 'Great service mind is the major of our business.',
            img: '/core/objective.jpg',
        },
    ]

    return (
        <div className='bg-white'>
            <Header />
            <div>
               <AboutTab />

                {/* Company Profile */}
                <section className="px-4 md:px-40 lg:px-80 py-12">
                    <h1 className="text-3xl font-bold text-[var(--one-pink)] mb-6">
                        Company Profile
                    </h1>

                    <p className="text-base leading-relaxed text-gray-700">
                        KDR is a technology logistics company that aims to cut inefficiencies in the logistics sector.
                        By creating a centralized technology platform equipped with transport, fleet management, and trucking platforms,
                        we aim to transform the logistics industry.
                        KDR was launched in 2018 and has been met with immediate success.
                        Our fleet consists of over 1,000 well-trained drivers serving businesses to provide trucking,
                        distribution, and customized supply chain solutions.
                    </p>
                </section>

                {/* Click-to-Play Video */}
                <div className="flex justify-center my-15">
                    {!isPlaying ? (
                        <div className="relative w-full max-w-4xl cursor-pointer" onClick={() => setIsPlaying(true)}>
                            {/* รูปปก */}
                            <video
                                src="/VDO/videoAboutMe.mp4"
                                className="w-full aspect-video object-cover rounded-md shadow-md"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                                    <svg
                                        className="w-8 h-8 text-[var(--one-pink)]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M6 4l10 6-10 6V4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <video
                            src="/VDO/videoAboutMe.mp4"
                            autoPlay
                            controls
                            className="w-full max-w-4xl rounded-md shadow-md"
                        />
                    )}
                </div>

                {/* Core Advantages */}
                <section className="px-4 md:px-40 lg:px-80 py-25 bg-white">
                    <h1 className="text-3xl font-bold text-[var(--one-pink)] mb-10">
                        CORE ADVANTAGES
                    </h1>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
                            {coreItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="relative group rounded-md shadow-md overflow-hidden cursor-pointer"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Title (default view) */}
                                    <div className="text-center py-3 font-medium text-black bg-white">
                                        {item.title}
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-[var(--one-pink)] text-white px-4 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        <p className="text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex justify-center my-15">
                    <img src="/wireframe/img.jpg"/>
                </section>
            </div>
            <Footer />
        </div>
    )
}
