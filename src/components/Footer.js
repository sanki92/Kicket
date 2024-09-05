import React from "react";
import logo from "../assets/logo.png";
import icons from "../assets/footerIcons.png";
import footerBg from "../assets/footerbg.png";
import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const {language} = useLanguage();
  return (
    <div className="relative flex">
      <img src={footerBg} className="absolute bottom-0 right-0" />
      <div className="flex flex-col items-center justify-between w-[80%] smM:w-[85%] mx-auto">
        <div
          className={`grid grid-cols-3 smM:grid-cols-4 h-full gap-x-20 w-full text-white ${
            language === "ar" ? "text-right" : ""
          }`}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="space-y-5 smM:col-span-4">
            <div className="flex justify-center items-center w-fit gap-x-3 text-xl">
              <img
                src={logo}
                className="w-[3.2rem] ml-5 smM:ml-0 smM:w-[2.8rem]"
              />
              <p className="font-[750]">KICKET</p>
            </div>
            <p className="leading-[23px] text-[14px]">
              {language === "ar"
                ? "لوريم ايبسوم دولار سيت أميت، كونسيكتيتور أدايبسيسينغ إيليت. دويس تيمبوس دويس ماتيس سوليكيتودين لوريم. نولا سيد غرافيدا أورسي أميت فيتاي فيل فويجيات ديام إيست."
                : "Lorem ipsum dolor sit amet consectetur. Duis tempus duis mattis sollicitudin lorem. Nulla sed gravida orci amet vitae vel feugiat diam est."}
            </p>
            <img src={icons} className="w-[70%]" />
          </div>
          <div className="smM:col-span-2">
            <h1 className="text-[18px] mb-2">
              {language === "ar" ? "روابط الحساب" : "Account Link"}
            </h1>
            <ul className="text-[15px] space-y-1">
              <li>{language === "ar" ? "الصفحة الرئيسية" : "Home"}</li>
              <li>{language === "ar" ? "من نحن" : "About Us"}</li>
              <li>{language === "ar" ? "الخدمة 1" : "Service 1"}</li>
              <li>{language === "ar" ? "الخدمة 2" : "Service 2"}</li>
              <li>{language === "ar" ? "اتصل بنا" : "Contact Us"}</li>
            </ul>
          </div>
          <div className="smM:col-span-2">
            <h1 className="text-[18px] mb-2">
              {language === "ar" ? "ابقى على تواصل" : "Get In Touch"}
            </h1>
            <ul className="text-[15px] space-y-1">
              <li>{language === "ar" ? "البريد الإلكتروني" : "Email"}</li>
              <li>email@email.com</li>
              <li className="pt-2">
                {language === "ar" ? "رقم الهاتف" : "Phone no."}
              </li>
              <li>+91 1234567899</li>
            </ul>
          </div>
        </div>
        <div className="text-white text-[14px] py-8 w-full h-[20%] flex items-center justify-center smM:text-center">
          <p>
            {language === "ar"
              ? "حقوق الطبع والنشر © Kicket | جميع الحقوق محفوظة | تصميم Web Prism Dynamics"
              : "Copyright © Kicket | All Rights Reserved | Designed By Web Prism Dynamics"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
