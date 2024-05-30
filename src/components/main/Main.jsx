import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/Context";

// css 
import "./Main.css";
import About from "../../Page/about/About";
import FotoGalery from "../../Page/fotoGalery/FotoGalery";
import tdiu from "../../assets/TDIU.png";
import tfi from "../../assets/tfi.png";

// icons 
import { FiBookmark, FiArrowRight } from "react-icons/fi";

// video import 
import video from "../../video/usat-video.mp4";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Main = () => {
    const { directions} = useContext(UserContext);
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState([]);
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

    const [showContract, setShowContract] = useState(false);

    const toggleContract = () => {
        setShowContract(!showContract);
    };

    return (
        <>
            <main className="text-center max-md:mt-[5vh]" id="students">
                <h1 className="text-4xl font-bold my-5 max-lg:pt-5 text-[#001930] max-lg:my-3 max-lg:text-2xl">{t('menu.about-1')}</h1>
                <span className="text-4xl font-bold text-[#FFCB05] max-lg:my-5 max-lg:text-2xl">{t('menu.about-2')}</span> 
                <div className="card-container relative">
                    <div className="cards">
                        <div className="grid grid-cols-3 gap-5 my-12 max-lg:hidden">
                        {
                  directions?.map((item) => (
                    <div key={item.id} className='flex flex-col justify-between items-center bg_img card_hover'>
                        <div className="card_img flex items-center justify-center w-full h-[8vh] mt-[10vh] my-3">
                            <img className="h-full" src={item.img} alt="" />
                        </div>
                        <div className={`main_card_body h-[40vh] text-center flex flex-col items-center justify-around ${showContract ? 'hidden' : ''}`}>
                            <h1 className="text-3xl text-[#FFFFFF] font-bold px-8 max-xl:text-xl">
                                {i18n.language === "uz" ? item.text_uz : i18n.language === "ru" ? item.text_ru : item.text_en}
                            </h1>
                            <p className="text-lg text-[#FFFFFF] my-1 px-6">
                                {i18n.language === "uz" ? item.body_uz.slice(0, 120) : i18n.language === "ru" ? item.body_ru.slice(0, 120) : item.body_en.slice(0, 120)}...
                            </p>
                            <div className="btn_con flex flex-col gap-3 mb-8">
                                <a href="https://admission.usat.uz/" target="_blank" className="btn w-[12vw] max-lg:p-2 max-lg:text-[10px] max-2xl:text-[12px] max-lg:font-normal">
                                    {t('menu.swiper-btn1')}
                                </a>
                                <button className="btn w-[12vw] max-lg:p-2 max-lg:text-[10px] max-2xl:text-[12px] max-lg:font-normal" onClick={toggleContract}>
                                    {t('menu.swiper-btn2')}
                                </button>
                            </div>
                        </div>
                        <div className={`contract text-[#FFFFFF] text-center py-2 pb-5 ${showContract ? '' : 'hidden'}`}>
                            <h1 className="text-[#FFCB05] font-semibold text-2xl py-3">
                                {i18n.language === "uz" ? item.name_uz : i18n.language === "ru" ? item.name_ru : item.name_en}
                            </h1>
                            {/* Yuqoridagi kod joriy tilni ta'minlaydi */}
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
                                <button className="btn w-[12vw] max-lg:p-2 max-lg:text-[10px] max-2xl:text-[12px] max-lg:font-normal" onClick={toggleContract}>
                                    {t('menu.swiper-btn2')}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
                        </div>
                    </div>
                </div>
                {/* Mobile responsive Swiper !  */}
                <div className="swiper hidden max-lg:block">
                    <Swiper
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
                        className="mySwiper h-[100vh]"
                    >
                        {
                            directions?.map((item) => (
                                <SwiperSlide key={item.id} className="w-full h- bg_img1 flex flex-col items-center justify-center rounded-[50px]">
                                    <div key={item.id} className="card_img w-[16vw] py-2">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={`swiper_card_body text-[#FFFFFF] flex flex-col justify-between items-center px-4 text-center gap-2 ${showContract ? 'hidden' : ''}`} onClick={() => setShowContract(true)}>
        <h1 className="h1-text-slice font-medium text-2xl py-1">
            {i18n.language === "uz" ? item.text_uz : i18n.language === "ru" ? item.text_ru : item.text_en}
        </h1>
        <p className="text-slice text-md">
            {i18n.language === "uz" ? item.body_uz : i18n.language === "ru" ? item.body_ru : item.body_en}
        </p>
        <div className="btn_container flex max-sm:flex-col items-center justify-center gap-3">
            <a href="https://admission.usat.uz/" target="_blank">
                <button className="btn w-[26vw] max-lg:p-2 max-lg:text-[10px] max-2xl:text-[12px] max-lg:font-normal">
                    {t('menu.swiper-btn1')}
                </button>
            </a>
            <button className="btn w-[26vw] px-4 max-lg:p-2 max-lg:text-[10px] max-2xl:text-[12px] max-lg:font-normal" onClick={toggleContract}>
                {t('menu.swiper-btn2')}
            </button>
        </div>
    </div>
    <div className={`contract text-[#FFFFFF] text-center py-2 pb-5 ${showContract ? '' : 'hidden'}`}>
        <h1 className="text-[#FFCB05] font-semibold text-2xl py-3">
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
        <div className="btn_con w-full flex justify-center items-center my-4">
            <button className="btn w-[35vw] max-lg:p-2 max-lg:text-[12px] max-2xl:text-[12px] max-lg:font-normal" onClick={toggleContract}>
                {t('menu.swiper-btn2')}
            </button>
        </div>
    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </main>
            <About />
            <FotoGalery />
            <div className="partner mt-[65vh] my-[20vh] text-center max-md:mt-[25vh] max-xl:mt-[5vh]" id="faq">
                <h1 className="text-4xl text-[#001930] font-bold my-8">{t('menu.about-6')}</h1>
                <div className="flex justify-center items-center gap-12">
                    <div className="w-[7vw] max-lg:w-[30vw]">
                        <img className="w-full" src={tdiu} alt="" />
                    </div>
                    <div className="w-[7vw] max-lg:w-[30vw]">
                        <img className="w-full" src={tfi} alt="" />
                    </div>
                </div>
            </div>
            <div className="news text-center my-[15vh] max-lg:my-[8vh]">
                <h1 className="text-4xl text-[#001930] font-bold">{t('menu.about-7')}</h1>
                <h1 className="text-4xl text-[#FFCB05] font-bold my-2">USAT University</h1>
                <div className="news_card my-12 flex justify-between items-start text-start max-lg:flex-col max-lg:gap-10">
                    <div className="news_video text-[#001930] w-[55%] max-lg:w-[100%]">
                        <video className="w-full h-full rounded-3xl" controls>
                            <source src={video} type="video/mp4" />
                        </video>
                        <h1 className="text-3xl font-medium my-4">{t('menu.news-1')}</h1>
                        <p className="text-lg font-normal my-4">{t('menu.news-2')}</p>
                        <div className="flex justify-between items-center">
                            <NavLink to="/news"><button className="btn-hover bg-[#FFCB05] border-2 border-[#FFCB05] text-[#00274C] font-bold py-3 px-5 rounded-3xl hover:bg-transparent hover:text-[#FFCB05]">{t('menu.news-btn')}</button></NavLink>
                            <button className="flex items-center gap-1 mr-10">
                                <FiBookmark className="text-[#FFCB05] text-3xl" />
                                <p className="text-[#FFCB05] text-2xl mb-3">...</p>
                            </button>
                        </div>
                    </div>
                    <div className="news_text w-[40%] flex flex-col gap-5 max-lg:w-[100%]">
                        {
                            news?.slice(0, 3).map((item) => (
                                <div key={item.id} className="news_card flex items-center gap-5 max-sm:flex-col">
                                    <div className="news_card_img w-[40%] h-[25vh] max-md:w-full rounded-3xl overflow-hidden">
                                        <img className="w-full h-full object-cover" src={item.image} alt="" />
                                    </div>
                                    <div className="news_card_body w-[60%] max-md:w-full">
                                        <h1 className="text-[#001930] text-xl">{i18n.language === "uz"
                                            ? item.title_uz
                                            : i18n.language === "ru"
                                                ? item.title_ru
                                                : item.title_en}</h1>
                                        <div className="flex justify-between items-center">
                                            <NavLink to="/news" className="text-[#FFCB05] flex gap-3 items-center my-3">
                                                <span className="text-lg" href="#">{t('menu.news-3')}</span>
                                                <FiArrowRight />
                                            </NavLink>
                                            <NavLink to="/news" className="text-[#FFCB05] text-2xl mb-3">...</NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
