"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

const HomeSlider = () => {
  const t = useTranslations("Slider");
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-screen"
      >
        <SwiperSlide className="  slide1 flex flex-col items-center justify-center">
            <div className="my-50 mx-20">
 <h4 className="text-white text-xl">{t("slide1.desc")}</h4>
          <h1 className="text-white text-6xl w-20 my-10">{t("slide1.title")}</h1>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
            {t("button")}
          </button>
            </div>
         
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
