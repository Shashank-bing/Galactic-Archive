import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className='space-y-4 lg:pr-36'>
            <h1 data-aos ="fade-up"
            className='text-4xl font-bold'>
              Welcome To Galactic Archive
            </h1>
            <p data-aos ="fade-up" data-aos-delay="300">
Galactic Archive is a curated digital space celebrating humanity’s journey beyond Earth. From historic missions to upcoming celestial events, we bring you the past, present, and future of space exploration in one place.            </p>
            <button data-aos ="fade-up" data-aos-delay="500"
            className='primary-button'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
