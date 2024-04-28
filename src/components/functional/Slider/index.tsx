'use client';

import Cards from '../cards';
import { Navigation, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles.css';
import { ReactNode } from 'react';

interface TypeSlider {
  children: ReactNode;
}

export default function Slider({ children }: TypeSlider) {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={24}
        slidesPerView={7}
        navigation
        scrollbar={{ draggable: true }}
      >
        {Array.isArray(children) &&
          children.map((item, index) => {
            return <SwiperSlide key={index}>{item}</SwiperSlide>;
          })}
      </Swiper>
    </div>
  );
}
