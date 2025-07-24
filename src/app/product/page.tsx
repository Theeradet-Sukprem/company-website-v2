'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RightBar from '@/components/RigthBar'
import CardTop from '@/components/CardTop'
import AboutTab from '@/components/about-tab/AboutTab'

export default function page() {
    return (
        <div>
            <Navbar />
            <CardTop />
            <RightBar />


            <Footer />
        </div>
    )
}
