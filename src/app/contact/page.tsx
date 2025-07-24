'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Phone } from 'lucide-react'

export default function Page() {
    return (
        <div className="bg-white">
            <Header />

            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-2xl uppercase text-black font-semibold border-b pb-2 mb-6">
                    Head Office
                </h2>

                <h1 className="text-xl font-bold mb-6 text-gray-800">
                    KDR TRANSPORT COMPANY LIMITED
                </h1>

                <div className="space-y-4 text-gray-700 text-sm mb-10">
                    <div className="flex items-start gap-2">
                        <MapPin className="text-pink-500 w-5 h-5" />
                        <p>
                            <span className="text-pink-600 font-medium">
                                554/59 SKYY9 CENTRE, 12th Floor, Asok – Din Daeng Road, Din Daeng, Bangkok 10400
                            </span>
                        </p>
                    </div>

                    <div className="flex items-start gap-2">
                        <Phone className="w-4 h-4 mt-1" />
                        <p>
                            <span className="font-medium">02-245-6186, 02-002-0094</span>
                        </p>
                    </div>

                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full md:w-[50vw] h-[70vh] rounded-lg overflow-hidden shadow">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.360387303706!2d100.559281110827!3d13.757127397114155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2862b3f651%3A0x171c9cdb0fecf34!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4hOC4lOC4teC4reC4suC4o-C5jCDguJfguKPguLLguJnguKrguJvguK3guKPguYzguJUg4LiI4Liz4LiB4Lix4LiUICjguKrguLPguJnguLHguIHguIfguLLguJnguYPguKvguI3guYgp!5e0!3m2!1sen!2sth!4v1712725390788!5m2!1sen!2sth"
                            title="Google Map"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                            style={{ border: "0" }}
                        ></iframe>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}
