import { useState } from "react";
import { useTranslation } from "react-i18next";

// import images 
import uz from "../../assets/flag/uz.jpg"
import ru from "../../assets/flag/ru.png"
import en from "../../assets/flag/usa.svg"

const Translation = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('selectedLanguage') || 'uz');

  const handleClick = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('selectedLanguage', selectedLang);
  };

  return (
    <div className="translation flex items-center gap-1">
      <select
        onChange={handleClick}
        value={lang}
        className="w-[3.2vw] max-sm:w-[17vw] max-md:w-[10vw] max-xl:w-[8vw] max-2xl:w-[5vw] max-md:text-md outline-none bg-transparent text-[#FFF] text-[25px]"
      >
        <option value="uz" className="text-[#333] text-lg">UZ</option>
        <option value="ru" className="text-[#333] text-lg">RU</option>
        <option value="en" className="text-[#333] text-lg">EN</option>
      </select>
      {/* Rasmlar */}
      {lang === "uz" && <img className="rounded-[50%] w-[1.8vw] h-[3.5vh]" src={uz} alt="Uzbekistan flag" />}
      {lang === "ru" && <img className="rounded-[50%] w-[1.8vw] h-[3.5vh]" src={ru} alt="Russian flag" />}
      {lang === "en" && <img className="rounded-[50%] w-[1.8vw] h-[3.4vh]" src={en} alt="USA flag" />}
    </div>
  );
};

export default Translation;
