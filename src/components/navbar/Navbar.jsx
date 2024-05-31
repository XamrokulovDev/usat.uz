// import css 
import "./Navbar.css";

// import useState anf useEffect 
import { useState, useEffect } from "react";

// import navlink 
import { NavLink } from "react-router-dom";

// import hamburgers 
import Hamburger from "hamburger-react";

// import images 
import Logo from "../../assets/navbarLogo.svg";

// import i18next
import { useTranslation } from "react-i18next";

// import useTranslation 
import Translation from "../translation/Translation";

// import icons 
import { IoCall } from "react-icons/io5";
import { FaTelegramPlane, FaRegUser } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar w-[100vw] py-2 z-40 relative ${location.pathname !== "/" ? 'bg-[#00274C]' : scrolled ? 'bg-[#00274C]' : ''}`}>
      <div className="container mx-auto flex justify-between items-center max-lg:hidden">
        <NavLink>
          <div className="logo w-20">
            <img src={Logo} alt="University Logo" className="w-full" />
          </div>
        </NavLink>
        <div className="navbar-nav text-white flex flex-col justify-center items-center gap-2">
          <div className="nav-call flex items-center gap-10">
            <a
              className="call-number flex items-center gap-2"
              href="tel:+998712007677"
            >
              <IoCall className="text-xl" />
              <strong>+998 78 888 38 88</strong>
            </a>
            <div className="messages flex items-center gap-5">
              <a href="https://t.me/usatuzb" target="_blank"><FaTelegramPlane className="text-xl" /></a>
              <a href="https://instagram.com/usatuz" target="_blank"><RiInstagramFill className="text-xl" /></a>
              <a href="https://www.facebook.com/usatuz" target="_blank"><FaFacebookF className="text-xl" /></a>
            </div>
          </div>
          <a href="https://admission.usat.uz/" target="_blank" className="w-[50%]">
            <button className={`bg-[#FFCB05] w-full py-1.5 rounded-3xl ${location.pathname !== "/" ? 'text-[#00274C]' : scrolled ? 'text-[#FFFFFF]' : ''}`}>{t('menu.swiper-btn3')}</button>
          </a>
          <ul className="flex items-center gap-5 uppercase">
            <li>
              <NavLink to="/">{t('menu.li-1')}</NavLink>
            </li>
            <li>
              <a href="#students">{t('menu.li-2')}</a>
            </li>
            <li>
              <a href="#applicants">{t('menu.li-3')}</a>
            </li>
            <li>
              <NavLink to="/news">{t('menu.li-4')}</NavLink>
            </li>
            <li>
              <a href="https://telegra.ph/Kop-soraladigan-savollarga-javoblar-07-25" target="_blank">{t('menu.li-5')}</a>
            </li>
            <li>
              <a href="https://t.me/usat_admins" target="_blank">{t('menu.li-6')}</a>
            </li>
          </ul>
        </div>
        <div className="personal-info flex items-center justify-between gap-4">
          <div className="translation mb-3">
            <Translation />
          </div>
        </div>
      </div>
      {/* Mobile device navbar  */}
      <div className="hidden toggle_container container">
        {/* navbar logo  */}
        <div className="logo w-[15vw] z-50 max-xl:w-[10vw]">
          <img className="w-full" src={Logo} alt="" />
        </div>
        <div className="flex items-center justify-between gap-1">
          {/* Menu link  */}
          <div className={`menu_link bg-[#333333d3] w-[100vw] h-[100vh] pt-[100px] backdrop-blur-sm flex flex-col items-center justify-center min-lg:justify-start min-lg:py-[150px] absolute top-0 ${isOpen ? 'right-0' : 'right-[100%]'} left-0 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="menu flex flex-col justify-center items-center min-sm:gap-1 text-[#FFFFFF] text-2xl my-5 max-lg:text-4xl">
              <li><NavLink to="/">{t('menu.li-1')}</NavLink></li>
              <li><a href="#students">{t('menu.li-2')}</a></li>
              <li><a href="#applicants">{t('menu.li-3')}</a></li>
              <li><NavLink to="/news">{t('menu.li-4')}</NavLink></li>
              <li><a href="https://telegra.ph/Kop-soraladigan-savollarga-javoblar-07-25">{t('menu.li-5')}</a></li>
              <li><a href="https://t.me/usat_admins" target>{t('menu.li-6')}</a></li>
              <li>
              <NavLink className="w-[50%]">
                <button className={`learn-btn w-full py-1.5`}>{t('menu.swiper-btn3')}</button>
              </NavLink>
              </li>
            </ul>
            <div className="nav-call flex items-center justify-center gap-10 max-sm:gap-3 min-lg:gap-5 text-[#FFFFFF] text-xl max-md:text-xl max-lg:text-2xl my-10 max-sm:my-2 max-sm:flex-col">
              <a
                className="call-number flex items-center gap-2"
                href="tel:+998712007677"
              >
                <IoCall className="text-xl" />
                <strong>+998 78 888 38 88</strong>
              </a>
              <div className="messages flex items-center gap-5 max-lg:text-4xl">
                <a href="https://t.me/usatuzb" target="_blank"><FaTelegramPlane className="text-xl" /></a>
                <a href="https://instagram.com/usatuz" target="_blank"><RiInstagramFill className="text-xl" /></a>
                <a href="https://www.facebook.com/usatuz" target="_blank"><FaFacebookF className="text-xl" /></a>
              </div>
            </div>
          </div>
          {/* Menu Login */}
          <div className="profile text-white flex items-center gap-2 z-50">
            <div className="translation flex justify-between items-center max-md:gap-3 max-lg:gap-[8vw]">
            <a href="https://admission.usat.uz/" target="_blank" className="bg-[#FFCB05] flex flex-col max-md:px-2 max-lg:px-10 min-lg:py-1 rounded-xl">
              <button className={`learn-btn max-md:text-[11px] max-lg:text-[13px] w-full border-b`}>{t('menu.swiper-btn4')}</button>
              <button className={`learn-btn max-md:text-[11px] max-md:text-[13px] w-full`}>{t('menu.swiper-btn5')}</button>
            </a>
              <Translation />
            </div>
          </div>
          {/* hamburger  */}
          <div className="toggle text-[#FFFFFF]">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
