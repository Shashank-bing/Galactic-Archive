import React from "react";
import Astro from "../../assets/astro.jpg";

const AnotherElement = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white pb-16 relative z-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 xl:pr-28 p-6 bg-blue-950/40 rounded-xl border-l-2 border-b-2 border-l-blue-900 border-b-blue-900 shadow-lg">
            <p
              data-aos="fade-up"
              className="text-sky-500 uppercase tracking-[.2em] text-sm font-semibold"
            >
              What Can You Find Here
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl font-extrabold drop-shadow-md"
            >
              Discover the Galactic Archive
            </h1>

            <p className="text-gray-300 leading-relaxed">
              Space exploration has expanded our understanding of the universe,
              revealing the beauty and mystery of galaxies far beyond our
              planet. Every astronaut’s journey brings us closer to the stars
              and inspires future generations to keep reaching further.
            </p>

            <ul className="list-disc ml-6 text-blue-200 text-sm space-y-1">
              <li>
                <strong>About</strong> gives you an overview of our mission and vision.
              </li>
              <li>
                <strong>Man In Space</strong> explores human achievements in space exploration.
              </li>
              <li>
                <strong>TimeLine</strong> highlights important milestones and events across history.
              </li>
              <li>
                <strong>Celestial Events</strong> brings you up to date with significant astronomical phenomena.
              </li>
            </ul>

            <p className="text-gray-400 italic">
              Feel free to explore each section to discover more about our cosmic journey.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              data-aos="fade-up"
              data-aos-delay="500"
              className="primary-button mt-2 bg-sky-600 hover:bg-sky-500 transition-colors px-7 py-2 rounded-full font-semibold shadow-lg"
            >
              Learn More
            </button>
          </div>
          <div className="flex justify-center items-center py-4 sm:py-0">
            <div className="relative group w-full sm:w-[95%] max-w-2xl">
              <img
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 w-full max-h-[500px] object-cover"
                data-aos="zoom-in"
                src={Astro}
                alt="SpaceWalk"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/40 via-transparent to-transparent pointer-events-none opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnotherElement;
