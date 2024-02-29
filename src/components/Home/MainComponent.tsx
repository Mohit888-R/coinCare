import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import BannerButton from './BannerButton'
import HomeStats from './HomeStats'
import CarouselBanner from './CarouselBanner'

function MainComponent() {
  return (
    <div className='bg-black h-screen '>
      <CarouselBanner/>
      <BannerButton/>
      <div className=' text-[56px] w-10/12 container font-semibold uppercase text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed sequi sit sapiente?
      </div>
      <HomeStats/>
    </div>
  )
}

export default MainComponent
