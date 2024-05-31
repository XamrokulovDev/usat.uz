import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
import { useLocation } from 'react-router-dom';

const NewsOpen = ({ state }) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(DOMPurify.sanitize(html), 'text/html');
    return doc.body.textContent || "";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='container mt-[20vh] my-[10vh]'>
      <h1 className='my-5 text-[#001930] text-3xl font-semibold mb-10'>
        {
          i18n.language === "uz"
          ? state.title_uz
          : i18n.language === "ru"
          ? state.title_ru
          : state.title_en
        }
      </h1>
      <div className="container mx-auto my-10">
        <div className="flex flex-wrap md:flex-nowrap">
          <img 
            src={state.image} 
            alt="Descriptive Alt Text" 
            className="float-left w-[60vw] h-[30vh] max-md:w-full max-md:h-[40vh] mr-4 mb-4 w-full md:w-auto md:max-w-xs rounded-3xl max-md:rounded-[35px]"
          />
          <p className="text-base text-justify text-xl">
            {i18n.language === "uz"
            ? stripHtml(state.description)
            : i18n.language === "ru"
            ? stripHtml(state.description_ru)
            : stripHtml(state.description_en)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsOpen;
