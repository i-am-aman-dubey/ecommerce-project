import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsData = [
    {
        id:1,
        name:'Victor',
        text:"Lorem,ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem, aliquam in vitae itaque repudiandae dignissimos neque inventore corporis nihil dicta quis nam nostrum",
        img:"https://picsum.photos/seed/picsum/200/300",
    },
    {
        id:2,
        name:'Staya',
        text:"Lorem,ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem, aliquam in vitae itaque repudiandae dignissimos neque inventore corporis nihil dicta quis nam nostrum",
        img:"https://picsum.photos/200/300?grayscale",
    },
    {
        id:3,
        name:'Virat Vikram',
        text:"Lorem,ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem, aliquam in vitae itaque repudiandae dignissimos neque inventore corporis nihil dicta quis nam nostrum",
        img:"https://picsum.photos/id/237/200/300",
    },
    {
        id:4,
        name:'kachra Seth',
        text:"Lorem,ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem, aliquam in vitae itaque repudiandae dignissimos neque inventore corporis nihil dicta quis nam nostrum",
        img:"https://picsum.photos/200/300",
    },
    {
        id:5,
        name:'Lalit burari',
        text:"Lorem,ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rem, aliquam in vitae itaque repudiandae dignissimos neque inventore corporis nihil dicta quis nam nostrum",
        img:"https://picsum.photos/id/870/200/300",
    },
]

const Testimonials = () => {
  return (
    <div className='py-10 mb-10 '>
        <div className='container '>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-primary text-sm '>
                    What our custumers are saying
                </p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Testomonials</h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo error aspernatur dolor, iste quas a hic laboriosam aliquid ea natus fugiat.</p>
            </div>
            <div data-aos='zoom-in'>
                <Swiper   modules={[Autoplay, Pagination]}
                     slidesPerView={3}
                     spaceBetween={20}
                     loop={true}
                    speed={500}
                    pagination={{ clickable: true }}
                    autoplay={{
                     delay: 1500,
                     disableOnInteraction: false,
                     pauseOnMouseEnter: true,
                }}
                    breakpoints={{
                     0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                 }}
                >
                    {TestimonialsData.map((data)=>(
                        <SwiperSlide key={data.id} className='my-6'>
                            <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative '>
                            <div className='mb-4'>
                                <img src={data.img} alt="" className='rounded-full w-20 h-20'/>
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                    <p className='text-xs dark:text-slate-300 text-gray-500'>{data.text}</p>
                                    <h1 className='text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light'>{data.name}</h1>
                                </div>
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute'></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonials
