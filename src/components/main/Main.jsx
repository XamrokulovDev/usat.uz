import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/Context";

// css 
import "./Main.css";
import About from "../../Page/about/About";
import FotoGalery from "../../Page/fotoGalery/FotoGalery";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules'; 

// import i18next 
import { useTranslation } from "react-i18next";

// import page newscomponents 
import Newscomponents from "../../Page/news.components/Newscomponents";

// import page partner
import Partner from "../../Page/partner/Partner";

const Main = () => {
    const { directions} = useContext(UserContext);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://usatadmin.pythonanywhere.com/api/v1/news/');
                const firstItem = response.data.results;
                setNews(firstItem);
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };

        fetchData([]);
    }, []);

    return (
        <>
            <main className="text-center max-md:mt-[5vh]" id="students">
                <h1 className="text-4xl font-bold my-5 max-lg:pt-5 text-[#001930] max-lg:my-3 max-lg:text-2xl">{t('menu.about-1')}</h1>
                <span className="text-4xl font-bold text-[#FFCB05] max-lg:my-5 max-lg:text-2xl">{t('menu.about-2')}</span> 
                <div className="card-container relative">
                    <div className="cards">
                        <div className="grid grid-cols-3 gap-8 my-12 max-lg:hidden">
                        {
                            directions?.map((item) => (
                                <div key={item.id} className='flex flex-col bg_img card_hover'>
                                    <div className="card_img flex items-center justify-center w-full h-[8vh] my-[6vh] mb-[8vh] my-3">
                                        <img className="h-full" src={item.img} alt="" />
                                    </div>
                                    <div className={`main_card_body h-[40vh] text-center flex flex-col gap-5`}>
                                        <h1 className="text-3xl text-[#FFCB05] font-bold px-8 max-xl:text-xl">
                                            {i18n.language === "uz" ? item.text_uz : i18n.language === "ru" ? item.text_ru : item.text_en}
                                        </h1>
                                        <p className="text-xl text-[#FFFFFF] my-1 px-[3vw]">
                                            {i18n.language === "uz" ? item.body_uz : i18n.language === "ru" ? item.body_ru : item.body_en}
                                        </p>
                                    </div>
                                    <div className={`contract text-[#FFFFFF] text-center py-2 pb-5 hidden`}>
                                        <h1 className="text-[#FFCB05] font-semibold text-2xl py-3">
                                            {i18n.language === "uz" ? item.name_uz : i18n.language === "ru" ? item.name_ru : item.name_en}
                                        </h1>
                                        <p className="font-bold text-xl">{i18n.language === "uz" ? item.title_1_uz : i18n.language === "ru" ? item.title_1_ru : item.title_1_en}</p>
                                        <p>{i18n.language === "uz" ? item.title_2_uz : i18n.language === "ru" ? item.title_2_ru : item.title_2_en}</p>
                                        <p>{i18n.language === "uz" ? item.title_3_uz : i18n.language === "ru" ? item.title_3_ru : item.title_3_en}</p>
                                        <p className="font-bold text-xl">{i18n.language === "uz" ? item.title_4_uz : i18n.language === "ru" ? item.title_4_ru : item.title_4_en}</p>
                                        <p>{i18n.language === "uz" ? item.title_5_uz : i18n.language === "ru" ? item.title_5_ru : item.title_5_en}</p>
                                        <p>{i18n.language === "uz" ? item.title_6_uz : i18n.language === "ru" ? item.title_6_ru : item.title_6_en}</p>
                                        <p className="font-bold text-xl">{i18n.language === "uz" ? item.title_7_uz : i18n.language === "ru" ? item.title_7_ru : item.title_7_en}</p>
                                        <p>{i18n.language === "uz" ? item.title_8_uz : i18n.language === "ru" ? item.title_8_ru : item.title_8_en}</p>
                                        <p>{i18n.language === "uz" ? item.title_9_uz : i18n.language === "ru" ? item.title_9_ru : item.title_9_en}</p>
                                        <div className="btn_con w-full flex justify-center items-center my-4">
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                {/* Mobile responsive Swiper !  */}
                <div className="swiper hidden max-lg:block mt-[5vh]">
    {directions && (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
              navigation={true}
              modules={[Pagination, Navigation]}
            className="mySwiper_2"
        >
            {directions.map((item) => (
                <SwiperSlide key={item.id} className="card_hover w-full bg_img1 flex flex-col items-center justify-center overflow-hidden z-50">
                    <div key={item.id} className="card_img w-[16vw] py-2 z-40 max-lg:pt-[5vh] max-sm:pt-[0]">
                        <img src={item.img} alt="" />
                    </div>
                    <div className={`swiper_card_body text-[#FFFFFF] flex flex-col justify-between items-center px-[10vw] text-center gap-2`}>
                        <h1 className="h1-text-slice font-medium text-2xl py-1 text-[#FFCB05]">
                            {i18n.language === "uz" ? item.text_uz : i18n.language === "ru" ? item.text_ru : item.text_en}
                        </h1>
                        <p className="text-slice text-md">
                            {i18n.language === "uz" ? item.body_uz : i18n.language === "ru" ? item.body_ru : item.body_en}
                        </p>
                        <div className="btn_container flex max-sm:flex-col items-center justify-center gap-3">
                            <a href="https://admission.usat.uz/" target="_blank">
                            </a>
                        </div>
                    </div>
                    <div className={`contract text-[#FFFFFF] text-center py-2 pb-5 max-md:pb-0 hidden`}>
                        <h1 className="text-[#FFCB05] font-semibold text-2xl py-3 max-md:py-1">
                            {i18n.language === "uz" ? item.name_uz : i18n.language === "ru" ? item.name_ru : item.name_en}
                        </h1>
                        <p className="text-xl font-medium py-1">
                            {i18n.language === "uz" ? item.title_1_uz : i18n.language === "ru" ? item.title_1_ru : item.title_1_en}
                        </p>
                        <p>
                            {i18n.language === "uz" ? item.title_2_uz : i18n.language === "ru" ? item.title_2_ru : item.title_2_en}
                        </p>
                        <p>
                            {i18n.language === "uz" ? item.title_3_uz : i18n.language === "ru" ? item.title_3_ru : item.title_3_en}
                        </p>
                        <p className="text-xl font-medium py-1">
                            {i18n.language === "uz" ? item.title_4_uz : i18n.language === "ru" ? item.title_4_ru : item.title_4_en}
                        </p>
                        <p>
                            {i18n.language === "uz" ? item.title_5_uz : i18n.language === "ru" ? item.title_5_ru : item.title_5_en}
                        </p>
                        <p>
                            {i18n.language === "uz" ? item.title_6_uz : i18n.language === "ru" ? item.title_6_ru : item.title_6_en}
                        </p>
                        <p className="text-xl font-medium py-1">
                            {i18n.language === "uz" ? item.title_7_uz : i18n.language === "ru" ? item.title_7_ru : item.title_7_en}
                        </p>
                        <p>
                            {i18n.language === "uz" ? item.title_8_uz : i18n.language === "ru" ? item.title_8_ru : item.title_8_en}
                        </p>
                        <p>
                            {i18n.language === "uz" ? item.title_9_uz : i18n.language === "ru" ? item.title_9_ru : item.title_9_en}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )}
</div>
            </main>
            <About />
            <FotoGalery />
            <Partner/>
            <Newscomponents/>
        </>
    );
}

export default Main;
