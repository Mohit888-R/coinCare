import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'

function HomeImage() {
  return (
    <div>
        <Image src="/assets/donation.svg" alt='donation' width={10} height={10}  className='rounded-xl fixed right-[0%] top-20 w-4/12 h-2/12'/>
        <Image src='/assets/dots.jpg' alt='dots' width={400} height={800} className='absolute top-[12%] left-[10%]'/> 
        <div className='absolute top-[10%] left-[25%] w-3/12 px-8 py-4 mt-10  m-auto  z-0 bg-slate-100 rounded-3xl'>
            <div className='text-[52px] leading-tight font-semibold'>Making a Difference Starts Here</div>
            <div className='text-[24px] pr-4'>Find and support charities that align with your passions.</div>
            <Input placeholder='Search by category or keyword' className='my-2 rounded-xl'/>
        </div>
    </div>
  )
}

export default HomeImage
