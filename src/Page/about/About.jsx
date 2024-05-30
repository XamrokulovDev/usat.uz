import { useContext } from "react"
import { UserContext } from "../../context/Context"
// import images 
import img from "../../assets/About.svg"

// css 
import "./About.css"
import { useTranslation } from "react-i18next"

const About = () => {
    const {about}=useContext(UserContext);
    const {t,i18n}=useTranslation();
  return (
    <>
    <div className="about flex justify-between items-center my-[20vh] max-lg:flex-col min-xl:my-[10vh]">
        <div className="about_img w-[45%] max-lg:w-[100%]">
            <img className="w-full" src={img} alt="" />
        </div>
        <div className="about_text w-[50%] max-lg:w-[100%] text-center mt-12">
            <h1 className="text-3xl font-bold text-[#001930]">{t('menu.about-3')}</h1>
            <h2 className="text-xl font-semibold text-[#001930] my-6">{t('menu.about-4')}</h2>
            <p className="text-lg text-[#001930] my-8">{t('menu.about-5')}</p>
            <a href="https://admission.usat.uz/" target="_blank"><button className="btn-hover text-[#00274C] border-2 border-[#FFCB05] bg-[#FFCB05] hover:bg-transparent hover:text-[#FFCB05] rounded-3xl font-bold py-3 px-8">{t('menu.swiper-btn1')}</button></a>
        </div>
    </div>
    <div className="about_card relative grid grid-cols-4 gap-10 my-[20vh] max-md:grid-cols-1 max-xl:grid-cols-2" id="applicants">
        {
            about?.map((item,index)=>(
                <div key={item.id} className={`bg-about-${index+1} btn-hover card about_bg rounded-[50px] relative cursor-pointer`}>
                    <h1 className={`text-color pl-5 text-[50px] absolute top-[-30px] italic font-bold text-color-${index+1}`}>0{index+1}</h1>
                    <div className="card_img w-full flex justify-center mt-[8vh]">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="card_body p-3 px-5 text-center mb-4 text-[#00274C]">
                        <h1 className="text-[25px] font-semibold">{
                          i18n.language === "uz"
                          ? item.name_uz
                          : i18n.language === "ru"
                          ? item.name_ru
                          : item.name_en}
                        </h1>
                        <p className="font-normal text-lg text-start">{
                        i18n.language === "uz"
                          ? item.title_uz
                          : i18n.language === "ru"
                          ? item.title_ru
                          : item.title_en}
                        </p>
                    </div>
                    <div className="w-full flex justify-center items-center absolute bottom-0">
                      <div className={`w-[100px] h-[3px] shadow-${index+1}`}></div>
                    </div>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default About
