import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./style/style.css"
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Estate from './Estate';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [estate, setEstate] = useState([]);

  useEffect(() => {
    fetch('Estate.json')
    .then(resp => resp.json())
    .then(data => setEstate(data))
  },[])

  return (
    <div>
       <Helmet>
        <title>Home
        </title>
      </Helmet>
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
        modules={[Autoplay]}
        
      >
        <SwiperSlide><img  src="https://i.ibb.co/ZgFxK10/webaliser-TPTXZd9m-Oo-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/RbHr7R0/todd-kent-178j8t-Jr-Nlc-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/W5DbQh9/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/SQmnpTK/avi-werde-h-Hz4yrvxwl-A-unsplash.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/6YZykjz/2151264468.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/4N7KrWQ/2150799793.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/sgLpyyc/jared-rice-Ahi-Unolb7cg-unsplash.jpg" alt="" /> </SwiperSlide>
        
      </Swiper>
  
        <div className="space-y-2 text-center mt-36">
          <h2 className="text-3xl font-bold">House Details</h2>
          <p className="font-serif text-sm">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-6">
          {estate.map(statecard => <Estate key={statecard.id} statecard={statecard}></Estate>)}
        </div>
      </div>
        <div className=''>
        <h2 className="text-3x"></h2>
        </div>

      </div>
  );
};

export default Home;
