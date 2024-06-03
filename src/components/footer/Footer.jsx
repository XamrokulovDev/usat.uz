// import images 
import { useTranslation } from "react-i18next";
import footerLogo from "../../assets/navbarLogo.svg"

// import icons 
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  const Years = new Date().getFullYear();
  const {t,i18n}=useTranslation();
  return (
    <footer className="bg-[#EBEBEB] text-center" id="contacts">
    <div className="container flex justify-between items-center max-md:flex-col max-xl:items-center max-md:gap-10 max-md:py-8 max-xl:py-[3vh]">
      <div className="footer_logo flex flex-col items-center cursor-pointer">
        <div className=" max-xl:w-[8vw] mt-5">
            <img className="w-full" src={footerLogo} alt="bu yerda rasm bor!" onClick={() => window.scrollTo(0, 0)}/>
        </div>
        <span className="w-[14vw] max-md:w-full max-md:text-center">
            <h1 className="text-2xl text-[#00274C] font-medium max-xl:text-sm">{t('menu.footer-1')}</h1>
        </span>
      </div>
      <div className="flex justify-between items-center gap-[160px] max-md:flex-col max-md:gap-[40px] max-xl:gap-[20px] ">
        <div className="footer_link text-[#00274C] text-lg max-xl:text-sm flex flex-col gap-2">
            <a className="font-medium text-xl mb-4" href="#">{t('menu.footer-2')}</a>
            <a href="#">{t('menu.footer-3')}</a>
            <a href="#">{t('menu.footer-4')}</a>
            <a href="#">{t('menu.footer-5')}</a>
        </div>
        <div className="footer_link text-[#00274C] text-lg max-xl:text-sm flex flex-col gap-2">
            <a className="font-medium text-xl mb-4" href="#">{t('menu.footer-6')}</a>
            <a href="#">{t('menu.footer-7')}</a>
            <a href="#">{t('menu.footer-8')}</a>
            <a href="#">{t('menu.footer-9')}</a>
        </div>
        <div className="footer_link text-[#00274C] text-lg max-xl:text-sm flex flex-col gap-2">
            <a className="font-medium text-xl mb-4" href="#">{t('menu.footer-10')}</a>
            <a href="#">{t('menu.footer-11')}</a>
            <a href="#">{t('menu.footer-12')}</a>
            <a href="#">{t('menu.footer-13')}</a>
        </div>
      </div>
    </div>
    <div className="container flex items-center justify-center my-[85px] max-md:my-[50px]">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-[#00274C] text-xl font-medium">{t('menu.footer-14')}</h1>
          <span className="text-3xl text-[#FFCB05] flex items-center gap-4">
            <a href="https://t.me/usatuzb" target="_blank"><FaTelegramPlane /></a>
            <a href="https://facebbok.com/usatuz" target="_blank"><FaFacebookF /></a>
            <a href="https://facebook.com/usatuzb" target="_blank"><FaTwitter /></a>
            <a href="https://instagram.com/usatuz" target="_blank"><RiInstagramFill /></a>
          </span>
        </div>
    </div>
    <span className="block w-full h-[2px] bg-[#D8D8D8B2] relative z-0"></span>
    <div className="footer_years container py-10 flex justify-between items-center text-[#00274C] max-md:flex-col">
        <h1 className="text-[18px] max-xl:text-sm">@<span>{Years}</span> USAT. {t('menu.footer-15')}</h1>
        <div className="absolute top-[-70px] relative border border-[#00274C] rounded-[50%] p-3 bg-[#EBEBEB] cursor-pointer max-md:top-[-5.5rem] z-0">
          <SlArrowUp  className="text-3xl" onClick={() => window.scrollTo(0, 0)}/>
        </div>
        <h1 className="text-[18px] max-xl:text-sm">{t('menu.footer-15')}</h1>
    </div>
    </footer>
  )
}

export default Footer
