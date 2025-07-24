'use client'

import React, { useEffect, useState } from 'react'
import { FaHeadset, FaPhoneAlt, FaQrcode, FaArrowUp } from 'react-icons/fa'

export default function RightBar() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const rightItems = [
        {
            icon: <FaHeadset className="text-xl" />,
            label: 'Support',
            onClick: () => alert('Live Chat Clicked'),
        },
        {
            icon: <FaPhoneAlt className="text-xl" />,
            label: 'Phone',
            onClick: () => alert('Call Hotline Clicked'),
        },
        {
            icon: <FaQrcode className="text-xl" />,
            label: 'QR Code',
            onClick: () => alert('WeChat Clicked'),
        },
    ]

    return (
        <div className="fixed right-2 top-1/3 z-50 space-y-2">
            {rightItems.map((item, i) => (
                <button
                    key={i}
                    onClick={item.onClick}
                    className="w-[80px] h-[65px] bg-[#053f6a] text-white flex flex-col justify-center items-center rounded-md hover:bg-[#075d99] transition cursor-pointer"
                >
                    {item.icon}
                    <span className="text-xs mt-1">{item.label}</span>
                </button>
            ))}

            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-[80px] h-[65px] bg-[#053f6a] text-white flex flex-col justify-center items-center rounded-md hover:bg-[#075d99] transition cursor-pointer"
                >
                    <FaArrowUp className="text-xl" />
                    <span className="text-xs mt-1">Scroll-Up</span>
                </button>
            )}
        </div>
    )
}
