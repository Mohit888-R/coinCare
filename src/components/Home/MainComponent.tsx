import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import BannerButton from './BannerButton'
import HomeStats from './HomeStats'
import CarouselBanner from './CarouselBanner'
import ConnectForm from '../Footer/ConnectForm'

function MainComponent() {
  return (
    <div className='bg-black h-full '>
      <CarouselBanner />
      <BannerButton />
      <div className=' text-[56px] w-10/12 container font-semibold uppercase text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. sed sequi sit sapiente?
      </div>
      <HomeStats />
      {/* Trending Fundraisers */}
      {/* raise funds for */}
      {/* Start a Fundraiser in three simple steps */}
      {/* why coincare */}
      {/* our SPONSORS */}
      {/* Latest News / Events */}
      <ConnectForm/>
    </div>
  )
}

export default MainComponent
