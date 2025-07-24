import React from 'react'
import SpaceX from '../../assets/spacex.jpg'

const Element = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white overflow-hidden pb-16 z-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center items-center py-4 sm:py-0">
            <div className="relative group w-full sm:w-[95%] max-w-2xl">
              <img
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 w-full max-h-[500px] object-cover"
                data-aos="zoom-in"
                src={SpaceX}
                alt="SpaceX Module"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none opacity-60"></div>
            </div>
          </div>
          <div className="space-y-6 xl:pr-32 p-6 bg-blue-950/40 rounded-xl border-b-2 border-r-2 border-b-blue-900 border-r-blue-900 shadow-lg">
            <p
              data-aos="fade-up"
              className="text-sky-500 uppercase tracking-[.2em] text-sm font-semibold"
            >
              About
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl font-extrabold drop-shadow-md"
            >
              Galactic Archive
            </h1>
            <p className="text-gray-300 leading-relaxed">
              Galactic Archive is a platform devoted to capturing the spirit and milestones of humanity's journey into the cosmos. Our mission is to chronicle technological breakthroughs—from the launch of Sputnik to Mars exploration—and to showcase the wonder and science behind celestial events that ignite curiosity across generations.
            </p>
            <ul className="list-disc ml-6 text-blue-200 text-sm space-y-1">
              <li>
                Interactive timelines of space achievements
              </li>
              <li>
                In-depth profiles on astronauts, missions, telescopes, satellites, and observatories
              </li>
              <li>
                Collections highlighting the impact, beauty, and mystery of the universe
              </li>
            </ul>
            <p className="text-gray-400 italic">
              Whether you're a student, educator, seasoned space enthusiast, or someone who simply gazes at the stars with awe, Galactic Archive invites you to explore, learn, and dream with us.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="primary-button mt-2 bg-sky-600 hover:bg-sky-500 transition-colors px-7 py-2 rounded-full font-semibold shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Element
