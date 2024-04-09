// import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style/style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

 function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[500px]"
      >
       <SwiperSlide><img  className='' src="https://img.freepik.com/premium-photo/modern-villa-dubai-3d-render-luxurious-architecture-house-modern-style_727625-174.jpg?w=740" alt="" /></SwiperSlide>
                <SwiperSlide><img className=' ' src="https://img.freepik.com/free-photo/old-wooden-house-village_1268-14691.jpg?w=996" alt="" /></SwiperSlide>
                <SwiperSlide><img className='' src="https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?w=996" alt="" /></SwiperSlide>
                <SwiperSlide><img className='' src="https://img.freepik.com/premium-photo/village-house-summer-day-blue-sky-surface_266732-25264.jpg?w=996" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner