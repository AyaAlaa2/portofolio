"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const HomeSlider = () => {
  const t = useTranslations("Slider");
  const locale = useLocale()
  return (
    <>
      <Swiper
      key={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-screen"
        loop={true}
      >
        <SwiperSlide className="  slide1 flex flex-col items-center justify-center">
          <div className="my-50 mx-20">
            <h4 className="text-white text-xl">{t("slide1.desc")}</h4>
            <h1 className="text-white text-6xl w-20 my-10">
              {t("slide1.title")}
            </h1>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
              {t("button")}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  slide flex flex-col items-center justify-center">
          <div className="my-50 mx-20">
            <div className="flex  justify-between items-center">
              <div className="content">
                <h1 className="text-blue-950 text-6xl w-100 my-10 font-extrabold uppercase ">
                  {t("slide2.title")}
                </h1>
                <p className="text-black text-xl">{t("slide2.desc")}</p>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                  {t("button")}
                </button>
              </div>
              <Image
                alt="slide2"
                src="/Developer-Next/Home/Slider/all-apps-screen-t.png"
                width={500}
                height={500}
                className="animate-image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  slide flex flex-col items-center justify-center">
          <div className="my-50 mx-20">
            <div className="flex  justify-between items-center">
              <div className="content">
                <h1 className="text-blue-950 text-6xl w-100 my-10 font-extrabold uppercase ">
                  {t("slide3.title")}
                </h1>
                <p className="text-black text-xl">{t("slide3.desc")}</p>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                  {t("button")}
                </button>
              </div>
              <div className="images animate-image grid grid-cols-2 gap-20">
                <Image
                  alt="slide3"
                  src="/Developer-Next/Home/Slider/food-delivery-img1.jpg"
                  width={200}
                  height={200}
                  className=""
                />
                <Image
                  alt="slide3"
                  src="/Developer-Next/Home/Slider/courier.jpg"
                  width={200}
                  height={200}
                  className=""
                />
                <Image
                  alt="slide3"
                  src="/Developer-Next/Home/Slider/fleet-management.jpg"
                  width={200}
                  height={200}
                  className=""
                />
                <Image
                  alt="slide3"
                  src="/Developer-Next/Home/Slider/tracking-app-1.jpg"
                  width={200}
                  height={200}
                  className=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
