import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImg from "../assets/service-snippet.png";
import client from "../assets/client.png";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { useLanguage } from "./LanguageContext";

const OurClients = ({ isPhone, clients }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isPhone ? 2 : 3,
    slidesToScroll: 1,
    arrows: false,
  };
  const { language } = useLanguage();
  const sliderRef = React.useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <div className="w-[85%] relative mx-auto mt-[5rem] my-10 smM:mb-2">
      <h2
        className="text-white text-[45px] text-center font-[750] mb-12 smM:text-[7vw] smM:whitespace-nowrap"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {language === "ar" ? "عملاؤنا" : "Our Clients"}
      </h2>

      <div className="relative flex flex-col justify-center">
        <div className="absolute w-full justify-between flex space-x-4 z-10">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
            onClick={handlePrevClick}
          >
            <HiOutlineChevronLeft className="text-7xl smM:text-2xl" />
          </button>
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl"
            onClick={handleNextClick}
          >
            <HiOutlineChevronRight className="text-7xl smM:text-2xl" />
          </button>
        </div>
        <Slider
          ref={sliderRef}
          className="h-[9rem] smM:h-[5rem] px-[5rem] pl-[8rem] smM:pl-[5rem]"
          {...settings}
        >
          {clients.map((e) => (
            <div className="bg-[#73717138] grid place-content-center max-w-[10rem] h-[10rem] smM:max-w-[5rem] smM:h-[5rem] rounded-full">
              <img
                className="mx-auto smM:w-10 w-[5rem] h-[5rem] object-contain"
                src={`https://kicketapi.webprismits.us/assets/clients/${e.logo}`}
              />
            </div>
          ))}
          <div className="bg-[#73717138] grid place-content-center max-w-[10rem] h-[10rem] smM:max-w-[5rem] smM:h-[5rem] rounded-full">
            <img className="mx-auto smM:w-10" src={client} />
          </div>
          <div className="bg-[#73717138] grid place-content-center max-w-[10rem] h-[10rem] smM:max-w-[5rem] smM:h-[5rem] rounded-full">
            <img className="mx-auto smM:w-10" src={client} />
          </div>
          <div className="bg-[#73717138] grid place-content-center max-w-[10rem] h-[10rem] smM:max-w-[5rem] smM:h-[5rem] rounded-full">
            <img className="mx-auto smM:w-10" src={client} />
          </div>
          <div className="bg-[#73717138] grid place-content-center max-w-[10rem] h-[10rem] smM:max-w-[5rem] smM:h-[5rem] rounded-full">
            <img className="mx-auto smM:w-10" src={client} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;
