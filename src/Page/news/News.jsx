import { useState, useEffect, useContext } from "react";
import img from "../../assets/news-img.svg";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import DOMPurify from "dompurify";
import { UserContext } from "../../context/Context";

const News = () => {
  const { setState } = useContext(UserContext);
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://usatadmin.pythonanywhere.com/api/v1/news/');
        setNews(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(DOMPurify.sanitize(html), 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="news-content mt-[20vh] my-[10vh]">
      <div className="container img-content my-[5vh] relative">
        <div className="news_ w-[35vw] absolute top-[100px] left-[75px] max-xl:hidden">
          <h1 className="text-[#FFFFFF] text-3xl font-medium">
            {t('menu.news-1')}
          </h1>
          <p className="text-[#FFFFFF] text-lg font-normal my-5">
            {t('menu.news-2')}
          </p>
          <button className="btn-hover py-2.5 px-10 border text-sm font-semibold border-[#FFCB05] bg-[#FFCB05] text-[#00274C] hover:text-[#FFCB05] hover:bg-transparent rounded-3xl">
            {t('menu.swiper-btn1')}
          </button>
        </div>
        <img className="w-full h-full" src={img} alt="News" />
      </div>
      <div className="news-information container flex flex-col gap-10 my-[5vh]">
        {
          news?.map((item, index) => (
            <NavLink to="/newsOpen" onClick={() => setState(item)}><div key={index + 1} className="card flex justify-between items-center gap-10 max-lg:flex-col relative">
              <div className="card_img w-[30%] h-[35vh] max-lg:w-full rounded-[35px] overflow-hidden">
                <img className="w-full h-full object-cover" src={item.image} alt={
                  i18n.language === "uz"
                    ? item.title_uz
                    : i18n.language === "ru"
                      ? item.title_ru
                      : item.title_en
                } />
              </div>
              <div className="card_body w-[70%] flex flex-col justify-between items-start text-[#001930] max-lg:w-full">
                <h1 className="text-3xl font-semibold">
                  {i18n.language === "uz"
                    ? item.title_uz
                    : i18n.language === "ru"
                      ? item.title_ru
                      : item.title_en}
                </h1>
                <p className="text-xl my-10">
                  {i18n.language === "uz"
                    ? stripHtml(item.description).slice(0, 450)
                    : i18n.language === "ru"
                      ? stripHtml(item.description_ru).slice(0, 350)
                      : stripHtml(item.description_en).slice(0, 450)}...
                </p>
                <div className="buttons w-full flex justify-between items-center">
                  <NavLink to="/newsOpen" onClick={() => setState(item)}>
                    <button className="text-[#FFCB05] flex items-center gap-4 ">
                      <p className="text-lg">{t('menu.news-3')}</p>
                      <GoArrowRight className="text-lg" />
                    </button>
                  </NavLink>
                  <NavLink to="/newsOpen" onClick={() => setState(item)}>
                    <button className="text-[#FFCB05]">
                      <p className="mb-2 text-4xl">...</p>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div></NavLink>
          ))
        }
      </div>
    </div>
  );
};

export default News;
