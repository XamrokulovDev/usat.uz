import React from 'react'

// import swiper page 
import SwiperVertical from "../Swiper/Swiper"

const Header = () => {
  return (
    <div className='absolute top-0 left-0 z-0 header w-[100vw] h-[100vh] max-md:h-[70vh] max-lg:h-[80vh]'>
        <SwiperVertical/>
    </div>
  )
}

export default Header