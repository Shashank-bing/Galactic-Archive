import React from 'react'
import Logo from '../assets/Galactic_archive.png'

const Navbar = () => {
  return (
    <div data-aos = "fade-down"
    className='fixed top-0 right-0 w-full z-100 bg-black/10 backdrop-blur-sm py-4 sm:py-4'>
      <div className='container mx-auto max-w-screen-2xl px-4'>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-shadow-white font-bold text-3xl text-white">
            <img
              src={Logo}
              alt="logo of galactic archive"
              className='w-12 sm:w-16'
            />
            <span className="tracking-wide">Galactic Archive</span>
          </div>
          <div className='text-white hidden md:block'>
            <ul className='flex items-center gap-7 text-xl py-4'>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href="#">Man In Space</a>
              </li>
              <li>
                <a href="#">TimeLine</a>
              </li>
              <li>
                <a href="#">Celestial Events</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
