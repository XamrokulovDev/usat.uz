import video from "../../video/usat-video.mp4"
import { NavLink } from 'react-router-dom'

// icons 
import { FiBookmark } from "react-icons/fi";

import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { UserContext } from "../../context/Context";


const Newscomponents = () => {
    const {news}=useContext(UserContext);
    const {t,i18n}=useTranslation();
    console.log(news);
   
  return (
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
                                <NavLink to={`/NewsOpen/${item.id}`}><div key={item.id} className="news_card flex items-center gap-5 max-sm:flex-col">
                                    <div className="news_card_img w-[40%] h-[25vh] max-md:w-full rounded-3xl overflow-hidden">
                                        <img className="w-full h-full object-cover" src={item.image} alt="" />
                                    </div>
                                    <div className="news_card_body w-[60%] max-md:w-full">
                                        <h1 className="text-[#001930] text-2xl font-semibold">{i18n.language === "uz"
                                            ? item.title_uz
                                            : i18n.language === "ru"
                                            ? item.title_ru
                                            : item.title_en}
                                        </h1>
                                    </div>
                                </div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
  )
}

export default Newscomponents