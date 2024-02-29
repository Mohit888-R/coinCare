import { HeroData } from '@/lib/utils/constant';
import Image from 'next/image';

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselBanner = () => {
    return (
        <div>
            <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={100}
                 loop={true}
                 slidesPerView={1}
                 navigation
                 className=''
            >
                {HeroData.map((item,index)=>(
                    <SwiperSlide key={index} virtualIndex={index} className='relative'>
                        <Image src={item?.imageUrl} width={300} height={100} className='h-4/12 w-[80%] m-auto  object-contain' alt='carousel_img'/>
                        <div className='absolute bottom-8 left-[20%] flex flex-col text-[54px] bg-red-500 px-8 py-4  font-bold text-white'> <span className='text-[28px] text-black'> 0{index}/0{HeroData.length} </span> <span> {item?.category}</span></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CarouselBanner;