import React, { useContext, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import { useLocation, useParams } from 'react-router-dom'; 
import { UserContext } from '../../context/Context';

const NewsOpen = () => {
  const { i18n } = useTranslation();
  const location = useLocation(); 

  const {id} = useParams();
  const { news } = useContext(UserContext);
  const datapage = news.find((item) => item.id === Number(id));

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(DOMPurify.sanitize(html), 'text/html');
    return doc.body.textContent || "";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!datapage) {
    return (
      <div className='container mt-[20vh] my-[10vh]'>
      </div>
    );
  }

  return (
    <div className='container mt-[20vh] my-[10vh]'>
      <h1 className='my-5 text-[#001930] text-3xl font-semibold mb-10'>
        {
          i18n.language === "uz"
            ? datapage.title_uz
            : i18n.language === "ru"
            ? datapage.title_ru
            : datapage.title_en
        }
      </h1>
      <div className="container mx-auto my-10">
        <div className="flex flex-wrap md:flex-nowrap">
          <img 
            src={datapage.image} 
            alt={
              i18n.language === "uz"
              ? datapage.title_uz
              : i18n.language === "ru"
              ? datapage.title_ru
              : datapage.title_en
            }  
            className="float-left w-[60vw] h-[30vh] max-md:w-full max-md:h-[40vh] mr-4 mb-4 w-full md:w-auto md:max-w-xs rounded-3xl max-md:rounded-[35px] object-cover"
          />
          <p className="text-base text-justify text-xl">
            {i18n.language === "uz"
              ? stripHtml(datapage.description)
              : i18n.language === "ru"
              ? stripHtml(datapage.description_ru)
              : stripHtml(datapage.description_en)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsOpen;
