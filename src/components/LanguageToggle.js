import React, { useState } from "react";

const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <div
        onClick={toggleLanguage}
        className="relative w-20 h-10 bg-gray-300 rounded-full cursor-pointer"
      >
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out 
            ${isEnglish ? "translate-x-1" : "translate-x-11"}`}
        ></div>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-gray-700">
          EN
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-gray-700">
          AR
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
