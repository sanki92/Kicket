import React, { useEffect, useState } from "react";
import heroImage from "../assets/whyKicket/heroBg.png";
import aboutImg from "../assets/whyKicket/aboutImg.png";
import Stories from "../components/WhyKicket/Stories";
import WhyChoose from "../components/WhyKicket/WhyChoose";
import Experience from "../components/Experience";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ourService1phone from "../assets/our-service-phone.png";
import axiosConfig from "../axios/axiosConfig";
import { useLanguage } from "../components/LanguageContext";

const WhyKicket = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [stories, setStories] = useState([
    {
      pdf:"",
      image: "",
      en: {
        title: "",
        description: "",
      },
      ar: {
        title: "",
        description: "",
      },
    },
  ]);
  const [whyChooseUs, setWhyChooseUs] = useState([
    {
      en: {
        title: "",
        description: "",
      },
      ar: {
        title: "",
        description: "",
      },
    },
  ]);
  const [about, setAbout] = useState({
    image:"",
    en: "",
    ar: "",
  });
  const { language } = useLanguage();
  const fetchStories = async () => {
    try {
      const response = await axiosConfig.get("/api/success-stories");

      const data = response.data.map((e) => ({
        image: e.image,
        pdf:e.file,
        en: {
          title: e.title,
          description: e.description,
        },
        ar: {
          title: e.arabic_title,
          description: e.arabic_description,
        },
      }));
      console.log("**** success", data);
      setStories(data);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };

  const fetchWhyChooseUs = async () => {
    try {
      const response = await axiosConfig.get("/api/selling-points");
      const data = response.data.map((e) => ({
        en: {
          title: e.title,
          description: e.description,
        },
        ar: {
          title: e.arabic_title,
          description: e.arabic_description,
        },
      }));
      setWhyChooseUs(data);
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };

  const fetchAbout = async () => {
    try {
      const response = await axiosConfig.get("/api/about-content");
      setAbout({
        image:response.data[0].image,
        en: response.data[0].description,
        ar: response.data[0].arabic_description,
      });
      console.log("about data:", response.data); // Debugging line
    } catch (error) {
      console.error("Error fetching home content data:", error);
    }
  };

  useEffect(() => {
    fetchStories();
    fetchWhyChooseUs();
    fetchAbout();
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Layout>
      <div className="">
        <div
          className="bg-cover bg-center h-screen flex smM:h-[50vh] justify-center items-center smM:relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <h1 className="text-[#FFC019] font-[750] text-[45px]">Why Kicket</h1>
          <div className="w-full h-[10rem] smM:h-[5rem] bg-gradient-to-b from-black/0 to-[#252525]/100 absolute bottom-0"></div>
        </div>

        <div className=" flex lgM:flex-col lgM:items-center text-white  text-[20px] w-[85%] smM:w-[90%] mx-auto gap-x-14 mt-14">
          <img src={`https://kicketapi.webprismits.us/assets/about/${about.image}`} className="smM:hidden w-[30rem]" />
          <img src={ourService1phone} className="hidden smM:block" />

          <div className="flex flex-col justify-center gap-y-5 lgM:items-center">
            <h1 className="text-white font-[750] text-[45px] smM:text-[7vw] smM:whitespace-nowrap smM:text-center smM:mt-3">
              About Kicket
            </h1>
            <p
              dir={language === "ar" ? "rtl" : "ltr"}
              className="leading-[35px]  smM:text-[4vw] smM:leading-[6vw] lgM:text-[2vw] lgM:leading-[3vw]"
            >
              {about[language]}
            </p>
          </div>
        </div>

        <Stories data={stories} dir={"stories"} isPhone={isPhone} />

        <div className=" flex lgM:flex-col lgM:items-center text-white text-[20px] w-[85%] smM:w-[90%] mx-auto gap-x-14 mt-14">
          <img src={aboutImg} className="smM:hidden w-[30rem]" />
          <img src={ourService1phone} className="z-10 hidden smM:block" />

          <div className="flex flex-col justify-center gap-y-10">
            <h1 className="text-white font-[750] lgM:text-center text-[45px] smM:text-[7vw] smM:whitespace-nowrap smM:text-center smM:mt-5">
              Why Choose Us
            </h1>

            <WhyChoose data={whyChooseUs} />
          </div>
        </div>

        <Experience />
      </div>
    </Layout>
  );
};

export default WhyKicket;
