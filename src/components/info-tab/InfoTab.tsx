'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function InfoTab() {
    const pathname = usePathname()
    const tabs = [
        { label: 'Info', path: '/news/info' },
        { label: 'Social', path: '/news/socialResponsibility' },
        { label: 'Team Mien', path: '/news/teamMien' },
        { label: 'Video Center', path: '/news/videoCenter' },
    ]

    return (
        <div>
            <section className="bg-[#f3f8fd] ">
                <div className="max-w-7xl mx-auto flex justify-center gap-10 py-4 text-base sm:text-base font-bold">
                    {tabs.map((tab, idx) => {
                        const isActive = pathname === tab.path
                        return (
                            <div key={tab.path} className="flex items-center gap-10 text-xl font-bold">
                                <Link
                                    href={tab.path}
                                    className={`pb-1 border-b-2 ${isActive
                                        ? 'text-[var(--one-pink)] border-[var(--one-pink)] font-medium'
                                        : 'text-gray-800 border-transparent hover:text-[var(--one-pink)]'
                                        }`}
                                >
                                    {tab.label}
                                </Link>
                                {idx < tabs.length - 1 && <span className="text-gray-400">|</span>}
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
