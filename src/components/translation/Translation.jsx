 // import translation 
 import { useState } from "react";
import {useTranslation} from "react-i18next"

// import images 
import uz from "../../assets/flag/uz.jpg"
import ru from "../../assets/flag/ru.png"
import en from "../../assets/flag/usa.svg"
 
 const Translation = () => {
     const {t,i18n}=useTranslation();
     const [lang,setLang]=useState("uz")
     const handleClick =(e)=>{
       setLang(e.target.value)
       i18n.changeLanguage(e.target.value)
     }
   return (
    <div className="translation">
      <select onChange={handleClick} className="w-[3.2vw] max-sm:w-[17vw] max-md:w-[10vw] max-xl:w-[8vw] max-2xl:w-[5vw] max-md:text-md outline-none bg-transparent text-[#FFF] text-2xl">
        <option value="uz" className="text-[#333] text-lg"><img src={uz} alt="" className="rounded-[50%] h-full"/>UZ</option>
        <option value="ru" className="text-[#333] text-lg"><img src={ru} alt="" className="rounded-[50%]"/>RU</option>
        <option value="en" className="text-[#333] text-lg"><img src={en} alt="" className="rounded-[50%]"/>EN</option>
      </select>
    </div>
   )
 }
 
 export default Translation