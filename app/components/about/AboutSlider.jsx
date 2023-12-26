"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import ClaintsCard from "./ClaintsCard";

const AboutSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        668: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      pagination={true}
      // modules={[Pagination]}
      className="testimonial-slider"
    >
      <SwiperSlide>
        <ClaintsCard />
      </SwiperSlide>

      <SwiperSlide>
        <ClaintsCard />
      </SwiperSlide>

      <SwiperSlide>
        <ClaintsCard />
      </SwiperSlide>

      <SwiperSlide>
        <ClaintsCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutSlider;
