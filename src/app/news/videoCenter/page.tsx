'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfoTab from '@/components/info-tab/InfoTab'

const activities = [
    {
        id: 1,
        title: 'Team Building',
        subtitle: 'Strengthen Collaboration',
        image: '/api/placeholder/300/200',
        description: 'We foster collaboration and strengthen bonds through engaging team-building activities that energize and unite our employees.'
    },
    {
        id: 2,
        title: 'Company Activities',
        subtitle: 'Vibrant Workplace Culture',
        image: '/api/placeholder/300/200',
        description: 'From fun gatherings to cultural events, our company activities ensure a vibrant and inclusive workplace culture.'
    },
    {
        id: 3,
        title: 'Training',
        subtitle: 'Professional Development',
        image: '/api/placeholder/300/200',
        description: 'We offer continuous learning opportunities through professional training sessions to help employees grow and excel.'
    },
    {
        id: 4,
        title: 'Birthday Parties',
        subtitle: 'Celebrate Together',
        image: '/api/placeholder/300/200',
        description: 'Celebrating birthdays together helps us build stronger relationships and create joyful memories.'
    },
    {
        id: 5,
        title: 'Annual Meeting',
        subtitle: 'Reflect & Celebrate',
        image: '/api/placeholder/300/200',
        description: 'Our annual meetings bring everyone together to celebrate achievements and look forward to future success.'
    },
    {
        id: 6,
        title: 'Temple Fair',
        subtitle: 'Cultural Experience',
        image: '/api/placeholder/300/200',
        description: 'Experience the richness of tradition through our participation in festive temple fairs and cultural showcases.'
    },
    {
        id: 7,
        title: 'Anti-Epidemic',
        subtitle: 'Health & Safety First',
        image: '/api/placeholder/300/200',
        description: 'We prioritize health and safety through company-wide efforts to support pandemic prevention and well-being.'
    },
    {
        id: 8,
        title: 'Volunteer Service',
        subtitle: 'Give Back to the Community',
        image: '/api/placeholder/300/200',
        description: 'Giving back matters. Our team is proud to support the community through dedicated volunteer service.'
    },
];

export default function page() {
    const [currentPage, setCurrentPage] = useState(1);
    const [windowWidth, setWindowWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const itemsPerPage = windowWidth >= 1024 ? 8 : 6;
    const totalPages = Math.ceil(activities.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = activities.slice(startIndex, startIndex + itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div className='bg-white'>
            <Header />
            <InfoTab />

            <div className="container mx-auto px-4 py-25 max-w-7xl ">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Team's Mien
                    </h1>
                </div>

                {/* Grid Layout */}
                <div className={`grid gap-10 mb-8 ${windowWidth >= 1024
                    ? 'grid-cols-4 grid-rows-2'
                    : 'grid-cols-3 grid-rows-2'
                    }`}>
                    {currentItems.map((activity) => (
                        <div
                            key={activity.id}
                            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">{activity.title}</div>
                                        <div className="text-sm text-blue-500 uppercase tracking-wide">{activity.subtitle}</div>
                                    </div>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-4">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${currentPage === 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Previous
                        </button>

                        <div className="flex space-x-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`w-10 h-10 rounded-full transition-all duration-200 ${currentPage === index + 1
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}
                        >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                )}
            </div>


            <Footer />
        </div>
    )
}
