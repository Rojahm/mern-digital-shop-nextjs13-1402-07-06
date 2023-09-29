"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
//for next not react its needed
SwiperCore.use([Autoplay]);

// import required modules
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";

function MainSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, Scrollbar]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 4
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 5
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 6
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 7
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 8
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-md shadow">
          <div className=" h-[20rem] bg-stone-200/30 flex justify-center items-center">
            Slide 9
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MainSlider;
