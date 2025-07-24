import React from 'react'
import { Satellite02Icon, EarthIcon, JupiterIcon } from "hugeicons-react";
import Wave from '../../assets/BLkE.gif';

const CardInfo = [
  {
    title: "Satellites",
    content: "Fun fact",
    description: "There are approximately 14,900 satellites orbiting the Earth, of which about 11,000 to 12,000 are active and functioning.",
    icon: <Satellite02Icon size={56} className="text-blue-400" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "Fun fact",
    description: "Astronauts aboard the ISS experience 16 sunrises and 16 sunsets every single day.",
    icon: <EarthIcon size={56} className="text-blue-300" />,
    aosDelay: "500",
  },
  {
    title: "Celestial Bodies",
    content: "Fun fact",
    description: "Chariklo is the smallest known object in the solar system with rings—a surprising discovery, since rings were once thought to exist only around giant planets like Saturn!",
    icon: <JupiterIcon size={56} className="text-blue-200" />,
    aosDelay: "700",
  }
];
const cardGradients = [
  'bg-gradient-to-t from-blue-900/90 via-blue-700/80 to-blue-600/70',
  'bg-gradient-to-t from-blue-800/90 via-blue-600/80 to-blue-500/70',
  'bg-gradient-to-t from-blue-700/90 via-blue-500/80 to-blue-400/70',
];

const Cards = () => {
  return (
    <section className='relative w-full bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white overflow-hidden py-16'>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide drop-shadow-lg">
          Space Exploration Insights
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10'>
          {CardInfo.map((data, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className={[
                cardGradients[index],
                'rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-blue-400/60 transition-shadow duration-300 min-h-[260px]'
              ].join(' ')}
            >
              <span className="mb-2">
                {data.icon}
              </span>
              <h3 className='mt-2 text-2xl font-semibold text-white'>{data.title}</h3>
              <p className='mt-1 text-sm uppercase tracking-widest text-blue-200 font-bold'>Fun Fact</p>
              <p className='mt-3 text-gray-300 text-base leading-relaxed'>{data.description}</p>
            </div>
          ))}
        </div>

        <img 
          src={Wave} 
          alt="wave animation"
          className="absolute z-0 top-[68%] left-1/2 transform -translate-x-1/2 w-[90%] h-[140px] opacity-60 pointer-events-none mix-blend-screen" 
        />
      </div>
    </section>
  );
}

export default Cards;
