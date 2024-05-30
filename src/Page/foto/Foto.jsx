import { useEffect, useState } from "react"

// import css 
import "./Foto.css"

// import axios 
import axios from "axios"
import { useTranslation } from "react-i18next";


const Foto = () => {
  const [galery, setGalery] = useState([]);
  const {t,i18n}=useTranslation();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://usatadmin.pythonanywhere.com/api/v1/galleries/');
        setGalery(response.data.slice(0, 12));
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <div className="w-[80vw] m-auto container-foto my-[10vh] relative text-center my-[25vh]">
      <span className=" foto-position absolute top-0 left-[40rem] max-xl:left-[16rem] max-xl:top-[-3rem] max-2xl:left-[26rem] max-2xl:top-[-2rem] max-md:hidden">
        <h1 className="foto-h text-3xl font-medium text-[#001930] max-xl:text-[15px] max-2xl:text-[20px]">Фотогалерея <br /> <span className="text-[#FFCB05]">USAT University</span></h1>
        <p className="text-lg text-[#000000] font-medium max-xl:font-normal max-xl:text-[10px] max-2xl:text-[13px]">Ваш билет в успешное будущее</p>
      </span>
    {
      galery?.map((item,index) => (
        <div key={index+1} className={`polygon_hover rounded-[50px] relative overflow-hidden max-md:rounded-3xl max-xl:rounded-3xl foto-card foto-card-${index+1}`}>
          <div className="w-full h-full shadow-hover absolute top-0 left-0"></div>
          <img className="w-full h-full object-cover" src={item.image} alt={i18n.language === "uz"
            ? item.title_uz
            : i18n.language === "ru"
            ? item.title_ru
            : item.title_en}
          />
        </div>
      ))
    }
  </div>
  )
}

export default Foto
