import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person from "../assets/testimonial-person.png";
import stars from "../assets/starts.png";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const CustomDot = ({ active }) => (
  <div
    className={`${active ? "active" : ""}`}
    style={{
      width: active ? "40px" : "8px", // wider when active
      height: "8px", // height of the dot
      borderRadius: "20px", // rounded edges for the bar shape
      backgroundColor: active ? "#ffffff" : "", // light gray for inactive, white for active
      outline: !active ? "1px solid white" : "",
      marginTop: "10px !important", // space between dots
      cursor: "pointer",
      transition: "width 0.3s ease", // smooth animation
    }}
  />
);

const ClientTestimonial = ({ isPhone, testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isPhone ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <div
       className="my-10"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {dots}
      </div>
    ),
    customPaging: (i) => <CustomDot active={i === currentSlide} />,
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
      <h2 className="text-white text-center text-[45px] font-[750] mb-12  smM:text-[7vw] smM:whitespace-nowrap">
        Client Testimonials
      </h2>

      <div className="relative">
        <Slider
          ref={sliderRef}
          className="h-[23rem] bg-cover bg-center rounded-3xl"
          {...settings}
        >
          {
            testimonials.map(e=>(

          <div className="bg-[#252525] h-[23rem] max-w-[23rem] flex flex-col space-y-5 p-7 text-white text-lg border border-white rounded-xl border-opacity-15">
            <div className="flex items-center gap-x-10">
              <img src={`https://kicketapi.webprismits.us/assets/testimonials/${e.image}`} />
              <div className="flex flex-col gap-y-2">
                <img src={stars} className="w-[9rem]" />
                <p className="">{e.name}</p>
              </div>
            </div>
            <div>
              <p>
               {e.message}
              </p>
            </div>
          </div>
            ))
          }
       
          {/* <div className="h-[30rem]">
            <div className="flex h-full">
              <img src={phone} alt="Service Image" className="" />
              <div className="slide-text text-white relative flex flex-col justify-center min-w-full">
                <h3 className="text-[35px] mb-5">Dolor Sit</h3>
                <p className="text-xl leading-[35px] w-[60%]">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                  Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                  Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
                  Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor
                  In Reprehenderit In Voluptate Velit Esse Cillum.
                </p>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default ClientTestimonial;
