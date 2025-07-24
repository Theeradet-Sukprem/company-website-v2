import React from 'react'

export default function CardTop() {
    return (
        <section className="h-[300px] relative overflow-hidden">
            <img
                src="/bg/cover-city.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
        </section>
    )
}
