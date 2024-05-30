// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Swiper.css"
import "swiper/css/pagination";
// import required modules
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const SwiperVertical = () => {
  const {t,i18n}=useTranslation()

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <Swiper
      direction={"vertical"}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={pagination}
      mousewheel={false}
      modules={[Pagination, Mousewheel, Autoplay]}
      className="mySwiper overflow-hidden absolute top-[-10vh] max-md:top-[-20vh] max-lg:top-[-20vh]"
    >


      <SwiperSlide className="flex items-center justify-around text-white max-lg:pr-5">
        <div className="flex flex-col items-center justify-center w-[35vw]">
          <h1 className="text-gr text-[60px] font-bold text-white max-md:text-[12px] max-lg:text-[23px] max-2xl:text-[30px] max-lg:font-normal max-lg:py-1">{t('menu.swiper-6')}</h1>
          <p className="w-[400px] text-white my-10 max-md:w-[130px] max-lg:w-[250px] max-md:text-[10px] max-lg:text-[17px] max-sm:my-2">
            {t('menu.swiper-5')}
          </p>
          <div className="flex items-center gap-5 max-lg:gap-2">
            <a href="https://admission.usat.uz/" target="_blank"><button className="btn max-lg:p-2 max-md:text-[7px] max-lg:text-[11px] max-2xl:text-[12px] max-lg:font-normal">{t('menu.swiper-btn1')}</button></a>
            <a href="https://admission.usat.uz/" target="_blank"><button className="btn max-lg:p-2 max-md:text-[7px] max-lg:text-[11px] max-2xl:text-[12px] max-lg:font-normal">{t('menu.swiper-btn2')}</button></a>
          </div>
        </div>
        {/* 4x card  */}
        <div className="grid grid-cols-2 gap-5 max-md:gap-2 max-xl:gap-3">
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h1 className="text-[70px] font-bold max-md:text-[30px] max-lg:text-[55px]">12</h1>
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-1')}</h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h1 className="text-[70px] font-bold max-md:text-[30px] max-lg:text-[55px]">72</h1>
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-2')}</h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">
            {t('menu.swiper-3')}
            </h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-4')}</h2>
          </div>
        </div>
      </SwiperSlide>


      <SwiperSlide className="flex items-center justify-around text-white max-lg:pr-5">
        <div className="flex flex-col items-center justify-center w-[35vw]">
          <h1 className="text-gr text-[60px] font-bold text-white max-md:text-[12px] max-lg:text-[23px] max-2xl:text-[30px] max-lg:font-normal">
            {t('menu.swiper-7')}
          </h1>
          <p className="w-[400px] text-white my-10 max-md:w-[130px] max-lg:w-[250px] max-md:text-[10px] max-lg:text-[17px] max-sm:my-2">
          {t('menu.swiper-8')}
          </p>
          <div className="flex items-center gap-5 max-lg:gap-2">
          <a href="https://admission.usat.uz/" target="_blank"><button className="btn max-lg:p-2 max-md:text-[7px] max-lg:text-[11px] max-2xl:text-[12px] max-lg:font-normal">{t('menu.swiper-btn1')}</button></a>
            <a href="https://admission.usat.uz/" target="_blank"><button className="btn max-lg:p-2 max-md:text-[7px] max-lg:text-[11px] max-2xl:text-[12px] max-lg:font-normal">{t('menu.swiper-btn2')}</button></a>
          </div>
        </div>
        {/* 4x card  */}
        <div className="grid grid-cols-2 gap-5 max-md:gap-2 max-xl:gap-3">
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h1 className="text-[70px] font-bold max-md:text-[30px]">12</h1>
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-1')}</h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h1 className="text-[70px] font-bold max-md:text-[30px]">72</h1>
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-2')}</h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">
            {t('menu.swiper-3')}
            </h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-4')}</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-around text-white max-lg:pr-5">
        <div className="flex flex-col items-center justify-center w-[35vw]">
          <h1 className="text-gr text-[60px] font-bold text-white max-md:text-[12px] max-lg:text-[23px] max-2xl:text-[30px] max-lg:font-normal max-lg:py-1">{t('menu.swiper-9')}</h1>
          <p className="w-[400px] text-white my-10 max-md:w-[130px] max-lg:w-[250px] max-md:text-[10px] max-lg:text-[17px] max-sm:my-2">
          {t('menu.swiper-10')}
          </p>
          <div className="flex items-center gap-5 max-lg:gap-2">
            <a href="https://admission.usat.uz/" target="_blank"><button className="btn max-lg:p-2 max-md:text-[7px] max-lg:text-[12px] max-2xl:text-[12px] max-lg:font-normal">{t('menu.swiper-btn1')}</button></a>
            <a href="https://admission.usat.uz/" target="_blank"><button className="btn max-lg:p-2 max-md:text-[7px] max-lg:text-[12px] max-2xl:text-[12px] max-lg:font-normal">{t('menu.swiper-btn2')}</button></a>
          </div>
        </div>
        {/* 4x card  */}
        <div className="grid grid-cols-2 gap-5 max-md:gap-2 max-xl:gap-3">
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h1 className="text-[70px] font-bold max-md:text-[30px]">12</h1>
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-1')}</h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h1 className="text-[70px] font-bold max-md:text-[30px]">72</h1>
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-2')}</h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">
            {t('menu.swiper-3')}
            </h2>
          </div>
          <div className="grid-card flex items-center justify-center flex-col p-4 max-lg:p-1 text-center max-md:w-[85px] max-md:h-[105px]">
            <h2 className="font-bold max-md:text-[6px] max-lg:font-normal max-lg:text-[12px]">{t('menu.swiper-4')}</h2>
          </div>
        </div>
      </SwiperSlide> 
    </Swiper>
  )
}

export default SwiperVertical