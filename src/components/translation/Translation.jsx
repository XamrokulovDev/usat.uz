import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// import images 
import uz from "../../assets/flag/uz.jpg";
import ru from "../../assets/flag/ru.png";
import en from "../../assets/flag/usa.svg";

const Translation = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('uz');

  const handleClick = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  // Tizimni qayta ishga tushirganda 'uz' tilini o'rnatish
  useEffect(() => {
    i18n.changeLanguage('uz');
  }, [i18n]);

  return (
    <div className="translation flex items-center gap-1">
      <select
        onChange={handleClick}
        value={lang}
        className="w-[3.2vw] max-sm:w-[17vw] max-md:w-[10vw] max-xl:w-[8vw] max-2xl:w-[5vw] max-md:text-md outline-none bg-transparent text-[#FFF] text-[25px]"
      >
        <option value="uz" className="text-[#333] text-lg max-sm:text-md">UZ</option>
        <option value="ru" className="text-[#333] text-lg max-sm:text-md">RU</option>
        <option value="en" className="text-[#333] text-lg max-sm:text-md">EN</option>
      </select>
      {/* Rasmlar */}
      {lang === "uz" && <img className="rounded-[50%] w-[1.8vw] h-[3.5vh] max-md:w-[8vw] max-md:h-[5vh] max-lg:w-[5.5vw] max-lg:h-[3.5vh]" src={uz} alt="Uzbekistan flag" />}
      {lang === "ru" && <img className="rounded-[50%] w-[1.8vw] h-[3.5vh] max-md:w-[8vw] max-md:h-[5vh] max-lg:w-[5.5vw] max-lg:h-[3.5vh]" src={ru} alt="Russian flag" />}
      {lang === "en" && <img className="rounded-[50%] w-[1.8vw] h-[3.4vh] max-md:w-[8vw] max-md:h-[5vh] max-lg:w-[5.5vw] max-lg:h-[3.5vh]" src={en} alt="USA flag" />}
    </div>
  );
};

export default Translation;
