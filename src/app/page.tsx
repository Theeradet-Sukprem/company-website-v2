'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RightBar from "@/components/RigthBar";
import { useState, useEffect } from "react";
import Link from "next/link";

interface NewsItem {
  title: string;
  date: string;
  img: string;
}

export default function Home() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('/api/news.json')
      .then((res) => res.json())
      .then((data: NewsItem[]) => setNewsList(data))
      .catch((err) => console.error('Error loading news:', err));
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <RightBar />
      <section className="h-[998px] relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/bg/vehicle-road.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Main Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug drop-shadow-md mb-10">
            MAKE YOUR LOGISTICS
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow mb-10">
            Cheaper Faster Better
          </p>

          <button className="px-6 py-2 cursor-pointer border border-white rounded-full text-lg hover:bg-white hover:text-black transition">
            <Link href='/about'>
              Read More
            </Link>
          </button>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-20 text-white text-center text-sm">
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="mt-1">province</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="mt-1">branch</p>
            </div>
            <div>
              <p className="text-3xl font-bold">300+</p>
              <p className="mt-1">Truck</p>
            </div>
            <div>
              <p className="text-3xl font-bold">300+</p>
              <p className="mt-1">Empoyee</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-35 bg-[#f3f8fd]mb-10">
        <div className="flex flex-col justify-center align-middle ">
          <h1 className="text-3xl font-bold text-center text-[var(--one-pink)] mb-4">
            PRODUCT SERVICE
          </h1>
          <p className="border-2 border-red-500 w-10 mx-auto mb-10"></p>
        </div>


        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-0 sm:gap-2 lg:grid-cols-3 lg:gap-6 px-0">
          {[
            { title: 'EXPRESS', icon: '/icons/warehouse.svg', img: '/services/express.png', discipetion: 'Confidential (First Mile, Line Haul, Last Mile)' },
            { title: 'FAST DELIVERY', icon: '/icons/truck.svg', img: '/services/express-fast.png', discipetion: 'Provided Fast & Short time delivery with Small size parcel, limited quantity available' },
            { title: 'COLD CHAIN', icon: '/icons/scooter.svg', img: '/services/express-cold.png', discipetion: 'Provided Cold chain services to support the temperature-sensitive products ' },
            { title: 'INDUSTRIAL', icon: '/icons/hr.svg', img: '/services/industrial3.jpg', discipetion: 'Provide the full function of transportation to help customer improve productivity & reduce cost' },
            { title: 'INSTALLMENT', icon: '/icons/gear.svg', img: '/services/installment.jpg', discipetion: 'Professional technical to provide the efficient service and good service ' },
            {
              title: 'CONSOLIDATION & CROSS BORDER ', icon: '/icons/software.svg', img: '/services/connecting.jpg', discipetion: 'provide efficient service  good service and Supports distribution of a variety '
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-md group h-64"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent text-white text-center text-base font-medium py-2 px-4 group-hover:hidden">
                {item.title}
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-[var(--one-pink)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center px-5">
                  <div className="text-lg font-semibold mb-2">
                    {item.title}
                    <br />
                    <span className="text-sm">{item.discipetion}</span>
                  </div>
                  <button className="px-4 py-1 mt-2 text-sm border border-white rounded hover:bg-white hover:text-black transition cursor-pointer">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg/bg-information.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-center text-white text-2xl mb-10 tracking-wide">NEWS</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Featured */}
            <div className="lg:col-span-2 flex flex-col bg-white rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src="/news/event1.jpg"
                alt="Event 1"
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-semibold">Special Event</h3>
                <p className="text-sm text-gray-500 mt-2">2025-07-01</p>
              </div>
            </div>

            {/* News List */}
            <div className="space-y-4 text-white h-full flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold">List Event</h4>
                <a
                  href="#"
                  className="text-sm underline hover:text-[var(--one-pink)]"
                >
                  More News &gt;&gt;
                </a>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                {newsList.map((news, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center hover:bg-white/10 p-2 rounded transition cursor-pointer"
                  >
                    <img
                      src={news.img}
                      alt={news.title}
                      referrerPolicy="no-referrer"
                      className="w-20 h-14 object-cover rounded"
                      onError={(e) => {
                        console.warn('Image failed to load:', news.img);
                        e.currentTarget.src = '/news/placeholder.jpg';
                      }}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{news.title}</p>
                      <p className="text-xs text-gray-300">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#f3f8fd] py-35">
        <h1 className="text-center text-[var(--one-pink)] font-bold text-2xl tracking-wider mb-10">PARTNERS</h1>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
            {[
              '/partners/flash-express.png',
              '/partners/all-now.png',
              '/partners/cp-ram.png',
              '/partners/j&t-express.png',
              '/partners/makro-logo.png',
              '/partners/cj-more.png',
              '/partners/tdm-logo.png',
              '/partners/best-inc-logo.jpg',
              '/partners/cpf-logo.png',
              '/partners/spx-express.png',
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-md flex items-center justify-center aspect-[4/3] w-full max-w-[200px] mx-auto hover:scale-105 transition-transform"
              >
                <img
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  className="max-h-[60%] max-w-[80%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
