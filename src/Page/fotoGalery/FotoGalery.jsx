import { useState, useEffect } from "react"

// import uselocation 
import { useLocation } from "react-router-dom";

// import css 
import "./FotoGalery.css"

// import icons 
import { IoSearch } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from "react-router-dom"

// import axios 
import axios from "axios"
import { useTranslation } from "react-i18next";

const FotoGalery = () => {
  const [galery, setGalery] = useState([]);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://usatsite.pythonanywhere.com/api/v1/galleries/');
        setGalery(response.data.slice(0, 11));
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="text-center">
      <div className="text-center relative">
        <h1 className="text-[#001930] text-4xl font-bold my-3">{t('menu.foto-galery-1')}</h1>
        <h1 className="text-[#FFCB05] text-4xl font-bold mb-6">{t('menu.foto-galery-2')}</h1>
      </div>
      <div className="fotoGalery-father">
        <div className="fotoGalery-row grid grid-cols-4 relative px-[10rem] max-lg:px-[5rem] max-2xl:px-[5rem]">
          <div className="fotoGalery overflow-hidden go-foto">
            <NavLink to="/foto" className="">
              <img className="foto-card-img relative" src={galery[0]?.image} alt={i18n.language === "uz"
                ? galery[0]?.title_uz
                : i18n.language === "ru"
                ? galery[0]?.title_ru
                : galery[0]?.title_en}
              />
            </NavLink>
          </div>
          <div className="foto-galery-text w-full mx-[8vw] max-lg:mx-[8vw] max-lg:w-[200%] max-lg:mx-[2vw] max-2xl:w-[200%] max-2xl:mx-[0]">
            <div className="text-center">
              <h1 className="text-[#000000] text-2xl font-medium mb-5 max-lg:text-[17px]">{t('menu.foto-galery-3')}</h1>
              <NavLink to="/foto" className="foto-btn"><button className="text-[#00274C] bg-[#FFCB05] py-2 px-5 rounded-3xl font-medium max-lg:text-[13px]">{t('menu.foto-galery-btn')}</button></NavLink>
            </div>
          </div>
          <div className="fotoGalery overflow-hidden ml-[16vw] max-2xl:ml-[16vw]">
            <NavLink to="/foto" className="">
              <img className="foto-card-img relative" src={galery[1]?.image} alt={i18n.language === "uz"
                ? galery[1]?.title_uz
                : i18n.language === "ru"
                ? galery[1]?.title_ru
                : galery[1]?.title_en}
              />
            </NavLink>
          </div>
        </div>
        <div className="fotoGalery-row grid grid-cols-5 gap-6">
          {
            galery.slice(2, 7).map((item, index) => (
              <div key={index + 3} className="fotoGalery overflow-hidden">
                <NavLink to="/foto" className="">
                  <img className="foto-card-img relative" src={item.image} alt={i18n.language === "uz"
                    ? item.title_uz
                    : i18n.language === "ru"
                    ? item.title_ru
                    : item.title_en}
                  />
                </NavLink>
              </div>
            ))
          }
        </div>
        <div className="fotoGalery-row grid grid-cols-4 gap-6 px-[10rem] max-lg:px-[4rem] max-2xl:px-[5rem]">
          {
            galery.slice(7, 11).map((item, index) => (
              <div key={index + 8} className="fotoGalery overflow-hidden">
                <NavLink to="/foto" className="">
                  <img className="foto-card-img relative" src={item.image} alt={i18n.language === "uz"
                    ? item.title_uz
                    : i18n.language === "ru"
                    ? item.title_ru
                    : item.title_en}
                  />
                  <div className="shadow-foto w-full h-full z-50 flex justify-center items-center">
                    <IoSearch className="text-[#d6d6d6b7] text-5xl mt-[8vh]" />
                  </div>
                </NavLink>
              </div>
            ))
          }
        </div>
      </div>
      <NavLink to="/foto" className="foto-link text-center bg-[#FFCB05] text-[#00274C] border-[#FFCB05] rounded-3xl py-2 px-4 font-semibold hidden">СМОТРЕТЬ ВСЕ ФОТО</NavLink>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-[20vh] hidden"
      >
        {galery.map((item, index) => (
          <SwiperSlide key={index + 1} className="w-full h-full rounded-[35px] overflow-hidden">
            <img className="w-full h-full object-cover" src={item.image} alt={i18n.language === "uz"
              ? item.title_uz
              : i18n.language === "ru"
              ? item.title_ru
              : item.title_en}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FotoGalery;
