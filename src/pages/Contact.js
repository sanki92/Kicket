import React, { useEffect, useState } from "react";
import bgImage from "../assets/service1/bg.png";
import aboutImg from "../assets/service1/service-1-1.png";
import contact1 from "../assets/contact/contact1.png";
import Layout from "../components/Layout";
import Stories from "../components/WhyKicket/Stories";
import ourService1phone from "../assets/our-service-phone.png";

import Experience from "../components/Experience";
import axiosConfig from "../axios/axiosConfig";
const Contact = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [formData, setFormData]= useState({
    name:"",
    email:"",
    message:""
  })

  function handleOnChange(e){
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  function handleSubmit(){
    try {
      const res = axiosConfig.post('/api/contact',formData);
      setFormData({
        name:"",
        email:"",
        message:""
      })
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
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
      <div
        className="bg-cover bg-center h-[60vh] flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="text-[#FFC019] font-[750] text-[45px]">Contact</h1>
        <div className="w-full h-[10rem] bg-gradient-to-b from-black/0 to-[#252525]/100 absolute bottom-0"></div>
      </div>
      <div className=" flex justify-center smM:flex-col text-white text-[20px] w-[85%] mx-auto gap-x-14 mt-14">
        <img src={contact1} className="smM:hidden" />
        <img src={ourService1phone} className="z-10 hidden smM:block" />

        <div className="flex flex-col justify-center gap-y-5">
          <h1 className="text-white font-[750] text-[45px] smM:text-[7vw] smM:whitespace-nowrap smM:mt-5 smM:text-center">
            Get In Touch With Us
          </h1>
          <input
            placeholder="Name"
            name="name"
            onChange={handleOnChange}
            className="smM:text-[4vw]  py-2 px-4 rounded-full border bg-transparent"
            type="text"
          />
          <input
            placeholder="Email"
            name="email"
            onChange={handleOnChange}
            className=" smM:text-[4vw] py-2 px-4 rounded-full border bg-transparent"
            type="text"
          />
          <textarea
            placeholder="Message"
            name="message"
            onChange={handleOnChange}
            className="smM:text-[4vw] h-[8rem] py-2 px-4 rounded-3xl border bg-transparent"
            type="text"
          />
          <button onClick={handleSubmit} className=" w-fit mt-5 smM:py-2 smM:px-[2rem] smM:text-[3.5vw] smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white">
            Submit{" "}
          </button>
        </div>
      </div>

      <Experience />
    </Layout>
  );
};

export default Contact;
