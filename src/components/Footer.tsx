'use client'

import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[#0d1a3b] text-white pt-16 pb-6 text-sm">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="hidden lg:grid grid-cols-6 gap-8 border-b border-white/10 pb-10">
                    {/* About Us */}
                    <div>
                        <h3 className="text-[var(--one-pink)] font-bold mb-2">Abuot Us</h3>
                        <ul className="space-y-1">
                            <a href='/about'><li>Company Profile</li></a>
                            <a href='/honor'><li>Honor</li></a>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-[var(--one-pink)] font-bold mb-2">Service</h3>
                        <ul className="space-y-1">
                            <li>List 1</li>
                        </ul>
                    </div>

                    {/* News */}
                    <div>
                        <h3 className="text-[var(--one-pink)] font-bold mb-2">News & Event</h3>
                        <ul className="space-y-1">
                            <a href='/news/info'><li>Latest News</li></a>
                            <a href='/news/socialResponsibility'><li>Social Responsibility</li></a>
                            <a href='/news/teamMien'><li>Our Team</li></a>
                            <a href='/news/videoCenter'><li>Video Center</li></a>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-[var(--one-pink)] font-bold mb-2">Success Stories</h3>
                        <ul className="space-y-1">
                            <a href='/success/caseStudeies'><li>Case Studies</li></a>
                            <a href='/success/collaborations'><li>Collaborations</li></a>
                            <a href='/success/partners'><li>Partners</li></a>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 flex flex-col gap-6 items-start">
                        {/* Contact Section */}
                        <div>
                            <h3 className="text-[var(--one-pink)] font-bold mb-2">Contact</h3>
                            <p className="font-bold text-lg">0-2245-6186</p>
                            <p className="font-semibold text-sm">info@kdr.co.th</p>
                            <p className="font-semibold text-sm">www.kdr.co.th</p>
                        </div>

                        {/* QR Section */}
                        <div>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/KDRTRANS" target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/facebook.svg" alt="Facebook" className="w-10 h-10 rounded-full bg-white p-2 shadow" />
                                </a>
                                <img src="/icons/line.svg" alt="Line" className="w-10 h-10 rounded-full bg-white p-2 shadow" />
                                <a href="https://www.tiktok.com/@kdrtransport" target='_blank' rel='noopener noreferrer'>
                                    <img src="/icons/tiktok.svg" alt="Tiktok" className="w-10 h-10 rounded-full bg-white p-2 shadow" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Mobile layout ( < 1024px ) */}
                <div className="lg:hidden flex flex-col gap-10 items-center text-center border-b border-white/10 pb-10">
                    {/* Contact */}
                    <div>
                        <h3 className="text-[var(--one-pink)] font-bold mb-2">服务热线</h3>
                        <p className="mb-1 font-bold text-lg">021-52661266</p>
                        <p className="mb-2">司机招募专线：<br /><span className="font-bold">15221410001</span></p>
                        <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
                            在线咨询
                        </button>
                    </div>

                    {/* QR */}
                    <div>
                        <h3 className="mb-2">上嘉物流公众号</h3>

                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-6 text-center text-xs space-y-2 text-gray-300">
                    <p>
                        © KDR Transport 2024.
                    </p>
                </div>
            </div>
        </footer>
    )
}
