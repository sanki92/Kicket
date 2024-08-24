import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import storiesImg from "../../assets/whyKicket/storiesImg.png";
import stars from "../../assets/starts.png";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Stories = ({ title = "Success Stories", isPhone, data, dir }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isPhone ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
  };

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

      <div className="relative">
        <Slider
          ref={sliderRef}
          className="h-[32rem] smM:h-[27rem] bg-cover bg-center rounded-3xl"
          {...settings}
        >
          {data?.map((e) => (
            <div className="bg-[#252525] h-[32rem] smM:h-[27rem] max-w-[25rem] flex flex-col space-y-5 p-3 text-white text-lg border border-white rounded-xl border-opacity-15">
              <div className="flex items-center gap-x-10">
                <img
                  src={`https://kicketapi.webprismits.us/assets/${dir}/${e.image}`}
                />
              </div>
              <div>
                <h1 className="text-[30px] text-center -mt-3 mb-5 smM:text-[6vw] smM:whitespace-nowrap ">
                  {e.title}
                </h1>
                <p className="text-[20px] leading-[30px] text-center smM:text-[4vw] smM:leading-[6vw]">
                  {e.description}
                </p>
              </div>
            </div>
          ))}
          <div className="bg-[#252525] h-[32rem] smM:h-[27rem] max-w-[25rem] flex flex-col space-y-5 p-3 text-white text-lg border border-white rounded-xl border-opacity-15">
            <div className="flex items-center gap-x-10">
              <img src={storiesImg} />
            </div>
            <div>
              <h1 className="text-[30px] text-center -mt-3 mb-5 smM:text-[6vw] smM:whitespace-nowrap ">
                Our Ticket Booking
              </h1>
              <p className="text-[20px] leading-[30px] text-center smM:text-[4vw] smM:leading-[6vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>
          <div className="bg-[#252525] h-[32rem] smM:h-[27rem] max-w-[25rem] flex flex-col space-y-5 p-3 text-white text-lg border border-white rounded-xl border-opacity-15">
            <div className="flex items-center gap-x-10">
              <img src={storiesImg} />
            </div>
            <div>
              <h1 className="text-[30px] text-center -mt-3 mb-5 smM:text-[6vw] smM:whitespace-nowrap ">
                Our Ticket Booking
              </h1>
              <p className="text-[20px] leading-[30px] text-center smM:text-[4vw] smM:leading-[6vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>
          <div className="bg-[#252525] h-[32rem] smM:h-[27rem] max-w-[25rem] flex flex-col space-y-5 p-3 text-white text-lg border border-white rounded-xl border-opacity-15">
            <div className="flex items-center gap-x-10">
              <img src={storiesImg} />
            </div>
            <div>
              <h1 className="text-[30px] text-center -mt-3 mb-5 smM:text-[6vw] smM:whitespace-nowrap ">
                Our Ticket Booking
              </h1>
              <p className="text-[20px] leading-[30px] text-center smM:text-[4vw] smM:leading-[6vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Stories;
