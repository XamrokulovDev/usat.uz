import React from 'react'
import { useTranslation } from 'react-i18next'
import tdiu from "../../assets/TDIU.png";
import tfi from "../../assets/tfi.png";

const Partner = () => {
    const {t,i18n}=useTranslation();
  return (
    <div className="partner mt-[20vh] my-[20vh] text-center max-md:mt-[25vh] max-xl:mt-[5vh]" id="faq">
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
  )
}

export default Partner