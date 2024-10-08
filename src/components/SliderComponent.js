import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImg from "../assets/service-snippet.png";
import phone from "../assets/phone1.png";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { useLanguage } from "./LanguageContext";

const SliderComponent = ({ serviceSnippet }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderRef = React.useRef(null);
  const { language } = useLanguage();
  const handlePrevClick = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <div className="w-[85%] relative mx-auto mt-[5rem] my-10">
      <h2 className="text-white text-[45px] font-[750] mb-12 flex justify-between items-center smM:text-[7vw] smM:whitespace-nowrap">
        {language === "ar" ? "مقتطفات الخدمات" : "Services Snippets"}
        <div className="justify-end flex space-x-4 z-10">
          <button
            className="w-12 h-12 smM:w-8 smM:h-8 bg-[#363637] rounded-full flex items-center justify-center text-white text-2xl"
            onClick={handlePrevClick}
          >
            <HiOutlineChevronLeft />
          </button>
          <button
            className="w-12 h-12 smM:w-8 smM:h-8 bg-[#363637] rounded-full flex items-center justify-center text-white text-2xl"
            onClick={handleNextClick}
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      </h2>

      <div className="relative">
        <Slider
          ref={sliderRef}
          style={{ backgroundImage: `url(${bgImg})` }}
          className="bg-white bg-opacity-10 h-[30rem] smM:h-[25rem] bg-cover bg-center rounded-3xl border overflow-hidden"
          {...settings}
        >
          {serviceSnippet.map((e) => (
            <div className="h-[30rem] smM:h-[25rem]">
              <div className="flex smM:flex-col h-full smM:relative smM:justify-end smM:p-5">
                <img
                  src={`https://kicketapi.webprismits.us/assets/snippets/${e.image}`}
                  alt="Service Image"
                  className="w-[25rem] h-[20rem] object-contain smM:absolute -top-6"
                />
                <div className="slide-text text-white relative flex flex-col justify-center min-w-full">
                  <h3
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="text-[35px] mb-5 smM:text-[4vw] smM:leading-[6vw] w-[60%]"
                  >
                    {e[language].title}
                  </h3>
                  <h3
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="text-[25px] mb-5 smM:text-[3.1vw] smM:leading-[4vw] w-[60%]"
                  >
                    {e[language].sub_title}
                  </h3>
                  <p
                    dir={language === "ar" ? "rtl" : "ltr"}
                    className="text-xl leading-[35px] w-[60%] smM:w-full smM:text-[4vw] smM:leading-[6vw]"
                  >
                    {e[language].description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
