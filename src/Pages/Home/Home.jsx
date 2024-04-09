import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./style/style.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Estate from './Estate';


const Home = () => {

      const [estate, setEstate] = useState([]);

      useEffect(() => {
          fetch('Estate.json')
          .then(resp => resp.json())
          .then(data => setEstate(data))
      },[])
     return (
          <div className=''>
     <div className='mt-8'>
      <Swiper className="mySwiper h-[500px]"
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
        
      >
        <SwiperSlide><img  src="https://i.ibb.co/hgjG824/2150761034.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/dphchmx/grant-lemons-j-TCLppdw-SEc-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/W5DbQh9/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/SQmnpTK/avi-werde-h-Hz4yrvxwl-A-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/6YZykjz/2151264468.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/4N7KrWQ/2150799793.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/sgLpyyc/jared-rice-Ahi-Unolb7cg-unsplash.jpg" alt="" /> </SwiperSlide>
        
      </Swiper>
    </div>
  <div>
  <div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">House Details</h2>
			<p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
  </div>
   <div className="grid grid-cols-1 mx-14  md:grid-cols-1 lg:grid-cols-2"> 
     {
          estate.map(statecard => <Estate key={statecard.id} statecard={statecard}></Estate>)
     }
    </div>
          </div>
     );
};

export default Home;