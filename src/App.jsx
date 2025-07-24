import React from 'react'
import BGV from './assets/BGVideo.mp4'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import Element from './components/Element/Element'
import AnotherElement from './components/Element/AnotherElement'
import Footer from './components/Footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react' 

const App = () => {
useEffect(()=>{
  AOS.init(
    {
      duration:1200,
      easing:"ease-in-out",
    }
  )
})

  return (
    <div>
      <div className='h-[700px] relative'>
        <video 
        autoPlay
        loop
        muted
        className='fixed right-0 top-0 h-[700px] w-full object-cover z[-1] transform scale-x-[-1]'>
          <source src={BGV} type='video/mp4'/>
        </video>
        <Navbar/>
        <Hero/>
      </div>
      <Cards/>
      <Element/>
      <AnotherElement/>
      <Footer/>
    </div>
  )
}

export default App
