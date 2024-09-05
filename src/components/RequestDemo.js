import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useLanguage } from "../components/LanguageContext";
import axiosConfig from "../axios/axiosConfig";

const RequestDemo = ({ setRequestDemo }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    job_title: "",
    event_type: "Sporting Event",
    hear_about_us: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("Submitted Form Data:", formData);
    try {
      const res = await axiosConfig.post("/api/enquire", formData);
    } catch (error) {
      console.error("err", error);
    }
  };

  const translations = {
    en: {
      first_name: "First Name",
      last_name: "Last Name",
      email: "Email",
      phone: "Phone number",
      company: "Company",
      job_title: "Job Title",
      event_type: "Type of Event",
      hear_about_us: "How did you hear about us?",
      request_demo: "Request A Demo",
      options: {
        sporting_event: "Sporting Event",
        music_event: "Music Event",
        live_event: "Live Event",
        other: "Other",
      },
    },
    ar: {
      first_name: "الاسم الأول",
      last_name: "الاسم الأخير",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "شركة",
      job_title: "المسمى الوظيفي",
      event_type: "نوع الحدث",
      hear_about_us: "كيف سمعت عنا؟",
      request_demo: "طلب عرض توضيحي",
      options: {
        sporting_event: "حدث رياضي",
        music_event: "حدث موسيقي",
        live_event: "حدث مباشر",
        other: "أخرى",
      },
    },
  };

  return (
    <div className="w-screen bg-[#252525] bg-opacity-30 h-screen fixed flex justify-center items-end top-0">
      <div className="bg-[#25252521] relative backdrop-blur-md w-[70%] smM:w-[85%] mb-12 mgM:mb-0 rounded-xl border text-white p-10 flex flex-col ">
        <RxCross2
          onClick={() => setRequestDemo(false)}
          className="absolute cursor-pointer top-7 right-7 text-2xl"
        />
        <h1 className="text-3xl font-bold mgM:mb-4">
          {translations[language].request_demo}
        </h1>
        <div className="mgM:gap-y-3 mgM:overflow-y-scroll my-8 mgM:h-[60vh] flex flex-col gap-y-10">
          <div className="flex gap-x-8 mgM:flex-col gap-y-3">
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              name="first_name"
              placeholder={translations[language].first_name}
              value={formData.first_name}
              onChange={handleOnChange}
            />
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              name="last_name"
              placeholder={translations[language].last_name}
              value={formData.last_name}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex gap-x-8 mgM:flex-col gap-y-3">
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="email"
              name="email"
              placeholder={translations[language].email}
              value={formData.email}
              onChange={handleOnChange}
            />
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="number"
              name="phone"
              placeholder={translations[language].phone}
              value={formData.phone}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex gap-x-8 mgM:flex-col gap-y-3">
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              name="company"
              placeholder={translations[language].company}
              value={formData.company}
              onChange={handleOnChange}
            />
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              name="job_title"
              placeholder={translations[language].job_title}
              value={formData.job_title}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex gap-x-8 mgM:flex-col gap-y-3">
            <select
              name="event_type"
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              value={formData.event_type}
              onChange={handleOnChange}
            >
              <option className="text-black" value="Sporting Event">
                {translations[language].options.sporting_event}
              </option>
              <option className="text-black" value="Music Event">
                {translations[language].options.music_event}
              </option>
              <option className="text-black" value="Live Event">
                {translations[language].options.live_event}
              </option>
              <option className="text-black" value="Other">
                {translations[language].options.other}
              </option>
            </select>
            <input
              className="border bg-transparent rounded-3xl w-[50%] mgM:w-full p-3"
              type="text"
              name="hear_about_us"
              placeholder={translations[language].hear_about_us}
              value={formData.hear_about_us}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="smM:py-2 w-fit mx-auto smM:px-[2rem] smM:text-[3.5vw] mgM:text-[2vw] mgM:px-[1.8rem] mgM:py-2 mgM:mx-auto smM:leading-[6vw] py-4 px-[3rem] rounded-[50px] text-xl bg-gradient-to-r from-[#ED4C75] to-[#973EFF] text-white"
        >
          {translations[language].request_demo}
        </button>
      </div>
    </div>
  );
};

export default RequestDemo;
