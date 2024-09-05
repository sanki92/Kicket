import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import storiesImg from "../../assets/whyKicket/storiesImg.png";
import stars from "../../assets/starts.png";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { useLanguage } from "../LanguageContext";

const Stories = ({ title = "Success Stories", isPhone, data, dir }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isPhone ? 1 : 3,
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
    <div className="w-[85%] relative mx-auto mt-[5rem] my-10">
      <h2 className="text-white text-start text-[45px] font-[750] mb-12 flex justify-between items-center smM:text-[7vw] smM:whitespace-nowrap">
        {title}{" "}
        <div className="justify-end flex space-x-4 z-10">
          <button
            className="w-12 h-12 bg-[#363637] rounded-full flex items-center justify-center text-white text-2xl"
            onClick={handlePrevClick}
          >
            <HiOutlineChevronLeft />
          </button>
          <button
            className="w-12 h-12 bg-[#363637] rounded-full flex items-center justify-center text-white text-2xl"
            onClick={handleNextClick}
          >
            <HiOutlineChevronRight />
          </button>
        </div>
      </h2>
    {console.log("**** success 1",data)}
      <div className="relative">
        <Slider
          ref={sliderRef}
          className=" max-h-[37rem] smM:min-h-[27rem] lgM:mx-auto bg-cover bg-center rounded-3xl"
          {...settings}
        >
          {console.log("**** success 2",data)}
          {data?.map((e) => (
            <div className="bg-[#252525] min-h-[37rem] max-h-[37rem] smM:min-h-[27rem] max-w-[25rem] flex flex-col items-center justify-center space-y-5 p-3 text-white text-lg border border-white rounded-xl border-opacity-15">
              <div className="flex items-center gap-x-10">
                <img
                  className="w-100% h-[16rem] object-contain"
                  src={`https://kicketapi.webprismits.us/assets/${dir}/${e.image}`}
                />
              </div>
              <div className="flex flex-col">
                <h1
                  dir={language === "ar" ? "rtl" : "ltr"}
                  className="text-[30px] text-center -mt-3 mb-5 smM:text-[5vw] smM:whitespace-nowrap "
                >
                  {e[language].title}
                </h1>
                <p
                  dir={language === "ar" ? "rtl" : "ltr"}
                  className="text-[20px] leading-[30px] text-center smM:text-[3vw] smM:leading-[5vw] lgM:text-[2vw] lgM:leading-[3vw]"
                >
                  {e[language].description}
                </p>
                <a download target="_blank" href={`https://kicketapi.webprismits.us/assets/stories/${e.pdf}`} className="cursor-pointer mt-4 w-fit mx-auto smM:py-2 smM:px-[2rem] smM:text-[3.5vw] mgM:text-[2vw] mgM:px-[1.8rem] mgM:py-2 mgM:mx-auto smM:leading-[6vw] py-2 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
                  Read More
                </a>
              </div>
            </div>
          ))}
          <div className="bg-[#252525] min-h-[37rem] max-h-[37rem] smM:min-h-[27rem] max-w-[25rem] flex flex-col items-center justify-center space-y-5 p-3 text-white text-lg border border-white rounded-xl border-opacity-15">
            <div className="flex items-center gap-x-10">
              <img
                className="w-100% h-[16rem] object-contain"
                src={storiesImg}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[30px] text-center -mt-3 mb-5 smM:text-[5vw] smM:whitespace-nowrap ">
                Our Ticket Booking
              </h1>
              <p className="text-[20px] leading-[30px] text-center smM:text-[3vw] smM:leading-[5vw] lgM:text-[2vw] lgM:leading-[3vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <button className="mt-4 w-fit mx-auto smM:py-2 smM:px-[2rem] smM:text-[3.5vw] mgM:text-[2vw] mgM:px-[1.8rem] mgM:py-2 mgM:mx-auto smM:leading-[6vw] py-2 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-[#252525] min-h-[37rem] max-h-[37rem] smM:min-h-[27rem] max-w-[25rem] flex flex-col items-center justify-center space-y-5 p-3 text-white text-lg border border-white rounded-xl border-opacity-15">
            <div className="flex items-center gap-x-10">
              <img
                className="w-100% h-[16rem] object-contain"
                src={storiesImg}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[30px] text-center -mt-3 mb-5 smM:text-[5vw] smM:whitespace-nowrap ">
                Our Ticket Booking
              </h1>
              <p className="text-[20px] leading-[30px] text-center smM:text-[3vw] smM:leading-[5vw] lgM:text-[2vw] lgM:leading-[3vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <button className="mt-4 w-fit mx-auto smM:py-2 smM:px-[2rem] smM:text-[3.5vw] mgM:text-[2vw] mgM:px-[1.8rem] mgM:py-2 mgM:mx-auto smM:leading-[6vw] py-2 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-[#252525] smM:min-h-[27rem] max-w-[25rem] flex flex-col items-center justify-center space-y-5 p-3 text-white text-lg border border-white rounded-xl border-opacity-15">
            <div className="flex items-center gap-x-10">
              <img
                className="w-100% h-[16rem] object-contain"
                src={storiesImg}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[30px] text-center -mt-3 mb-5 smM:text-[5vw] smM:whitespace-nowrap ">
                Our Ticket Booking
              </h1>
              <p className="text-[20px] leading-[30px] text-center smM:text-[3vw] smM:leading-[5vw] lgM:text-[2vw] lgM:leading-[3vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <button className="mt-4 w-fit mx-auto smM:py-2 smM:px-[2rem] smM:text-[3.5vw] mgM:text-[2vw] mgM:px-[1.8rem] mgM:py-2 mgM:mx-auto smM:leading-[6vw] py-2 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
                Read More
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Stories;
