import React, { useState } from "react";
import bgImg from "../assets/experience.png";
import phones2 from "../assets/2phone.png";
import { useLanguage } from "./LanguageContext";

const Experience = () => {
  const { language } = useLanguage();
  return (
    <div className="my-[5rem] smM:mt-[2rem] flex justify-center items-center h-[30rem] smM:h-[15rem]">
      <hr className="border-white border-opacity-50 w-full smM:hidden" />
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="h-[20rem] smM:h-[10rem] smM:min-w-[90%] relative min-w-[65%] bg-cover bg-center rounded-2xl bg-[#252525] flex justify-end p-[6rem] smM:p-[0rem]"
      >
        <img
          src={phones2}
          className="absolute -left-[12rem] w-[53%] bottom-0 smM:w-[30%] smM:left-0 smM:top-10"
        />
        <div className="flex smM:items-end items-center justify-center flex-col w-[24rem] text-center smM:p-4">
          <h1
            dir={language === "ar" ? "rtl" : "ltr"}
            className="text-[#EBEBEB] text-[30px] leading-[36px] mb-4 smM:text-[4.3vw] smM:text-right smM:leading-[23px] smM:whitespace-nowrap"
          >
            {language === "ar"
              ? "اطلب عرضك اليوم"
              : `Experience It Live:`}
              <br className="hidden smM:block" />
              {language === "ar"
              ? "جرّبه مباشرة"
              : `Request Your Demo Today`}
            
          </h1>
          <button className="py-4 px-[3rem] smM:py-2 smM:px-[2rem] smM:text-[3.5vw] smM:leading-[6vw] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
            {language === "ar" ? "اطلب العرض التوضيحي" : "Request for Demo"}
          </button>
        </div>
      </div>
      <hr className="border-white w-full border-opacity-50 smM:hidden" />
    </div>
  );
};

export default Experience;
