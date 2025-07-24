'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)
    const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | number | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    type NavItem =
        | { label: string; href: string }
        | { label: string; children: { label: string; href: string }[] }

    const NAV_ITEMS: NavItem[] = [
        { label: 'Home', href: '/' },
        {
            label: 'About Us',
            children: [
                { label: 'Company Profile', href: '/about' },
                { label: 'Honor & Awards', href: '/about/honor' },
            ],
        },
        { label: 'Products & Services', href: '/services' },
        {
            label: 'News & Events',
            children: [
                { label: 'Latest News', href: '/news/info' },
                { label: 'Social Responsibility', href: '/news/socialResponsibility' },
                { label: 'Our Team', href: '/news/teamMien' },
                { label: 'Video Center', href: '/news/videoCenter' },
            ],
        },
        {
            label: 'Success Stories',
            children: [
                { label: 'Case Studies', href: '/success/caseStudeies' },
                { label: 'Partners', href: '/success/partners' },
                { label: 'Collaborations', href: '/success/collaborations' }
            ],
        },
        { label: 'Contact Us', href: '/contact' },
    ]

    const handleCloseMenu = () => {
        setIsClosing(true)
        setTimeout(() => {
            setMobileOpen(false)
            setIsClosing(false)
        }, 300)
    }

    const handleMouseEnter = (index: any) => {
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout)
            setDropdownTimeout(null)
        }
        setOpenDropdown(index)
    }

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setOpenDropdown(null)
        }, 300)
        setDropdownTimeout(timeout)
    }

    const handleDropdownMouseEnter = () => {
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout)
            setDropdownTimeout(null)
        }
    }

    return (
        <>
            <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideOutToRight {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
        .animate-slideInFromRight {
          animation: slideInFromRight 0.3s forwards;
        }
        .animate-slideOutToRight {
          animation: slideOutToRight 0.3s forwards;
        }
      `}</style>

            <nav
                className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-md' : 'bg-white/0 text-white'
                    }`}
            >
                <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-[var(--one-pink)]">KDR</div>

                    {/* Mobile toggle */}
                    <div className="lg:hidden">
                        <button onClick={() => (mobileOpen ? handleCloseMenu() : setMobileOpen(true))}>
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Desktop nav */}
                    <ul className="hidden lg:flex flex-row gap-8 font-medium text-xl p-5">
                        {NAV_ITEMS.map((item: any, index: any) => {
                            const isActive =
                                pathname === item.href || item.children?.some((c: any) => pathname === c.href)

                            return (
                                <li
                                    key={item.label + index}
                                    className="relative"
                                    onMouseEnter={() => item.children && handleMouseEnter(index)}
                                    onMouseLeave={() => item.children && handleMouseLeave()}
                                >
                                    {item.href && !item.children ? (
                                        <Link
                                            href={item.href}
                                            className={`relative inline-block transition-colors cursor-pointer 
                        ${isActive ? 'text-[var(--one-pink)] font-semibold' : 'text-inherit hover:text-[var(--one-pink)]'}
                        after:content-[''] after:block after:h-[2px] after:bg-[var(--one-pink)] 
                        after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left`}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <>
                                            <span
                                                className={`relative inline-block transition-colors cursor-pointer 
                          ${isActive ? 'text-[var(--one-pink)] font-semibold' : 'text-inherit hover:text-[var(--one-pink)]'}
                          after:content-[''] after:block after:h-[2px] after:bg-[var(--one-pink)] 
                          after:scale-x-0 ${openDropdown === index ? 'after:scale-x-100' : ''} hover:after:scale-x-100 after:transition-transform after:origin-left`}
                                            >
                                                {item.label}
                                            </span>

                                            {/* Dropdown */}
                                            <ul
                                                className={`absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-base  text-black shadow-md  z-50 min-w-[180px] text-sm transition-all duration-300 ${openDropdown === index
                                                        ? 'opacity-100 pointer-events-auto transform translate-y-0'
                                                        : 'opacity-0 pointer-events-none transform -translate-y-2'
                                                    }`}
                                                onMouseEnter={handleDropdownMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                {item.children?.map((child: any, cidx: any) => (
                                                    <li key={child.href + cidx}>
                                                        <Link
                                                            href={child.href}
                                                            className={`block px-4 py-2 text-center transition-colors hover:bg-[var(--one-pink)] hover:text-white ${pathname === child.href ? 'bg-[var(--one-pink)] text-white font-medium' : ''
                                                                }`}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Mobile nav menu */}
                {mobileOpen && (
                    <div
                        className={`lg:hidden fixed top-0 right-0 w-[80%] h-full bg-white text-black z-[90] ${isClosing ? 'animate-slideOutToRight' : 'animate-slideInFromRight'
                            }`}
                    >
                        <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
                            {NAV_ITEMS.map((item: any, index: number) => (
                                <li key={index}>
                                    {item.href ? (
                                        <Link href={item.href} onClick={handleCloseMenu}>
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <>
                                            <span className="block mb-2">{item.label}</span>
                                            <ul className="pl-4 text-sm space-y-2">
                                                {item.children.map((child: any, cidx: number) => (
                                                    <li key={cidx}>
                                                        <Link href={child.href} onClick={handleCloseMenu}>
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}
