import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import ConnectForm from './ConnectForm';

function Footer() {
    return (
        <div className='grid grid-cols-2 items-center justify-center bg-black border-t'>
            {/* left */}
            <div className='w-10/12 m-auto  py-20 border-r text-white'>
                <div className="flex items-center gap-4  ">
                    <Image src="/assets/coincare_logo.png" width={100} height={100} alt="coincare_logo" />
                    <div className='flex flex-col text-white'>
                        <span className="text-[1em]  font-normal select-none uppercase "> CoinCare</span>
                        <span className="text-[1em]  font-normal select-none uppercase "> Fundraiser</span>
                    </div>
                </div>
                <div className="text-white gap-4 flex pt-8">
                    <Button variant={'default'} className="bg-white h-[3.5rem] w-36  text-black hover:bg-white transition duration-150  uppercase text-[16px] font-medium">Fundraise</Button>
                    <Button variant={'outline'} className="border h-[3.5rem] w-36 border-white text-white hover:text-white  uppercase text-[16px] font-medium">Donate</Button>
                </div>

                {/* also can create a component for redirect to another page */}
                <div className='py-10 flex gap-4'>
                    <Button variant={'outline'}> <Twitter /> </Button>
                    <Button variant={'outline'}> <Facebook /> </Button>
                    <Button variant={'outline'}> <Instagram /> </Button>
                    <Button variant={'outline'}> <Youtube /> </Button>
                    <Button variant={'outline'}><Linkedin /> </Button>
                </div>
               
            </div>


            {/* right */}
            <div className='w-10/12 text-white'>
                {/* <h2 className='text-[28px] font-medium uppercase pt-8'>Quick Links</h2> */}
                <ul className="grid grid-cols-2 uppercase text-[20px] gap-4 py-8 pt-20">
                    <li>Events</li>
                    <li>About Us</li>
                    <li>Charity List</li>
                    <li>Terms & conditions</li>
                    <li>privacy policy</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
