import React, { createContext, useState, useContext } from "react";

// Create a Language Context
const LanguageContext = createContext();

// Create a Language Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, loading, setLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => useContext(LanguageContext);
