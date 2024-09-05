import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLanguage } from "../LanguageContext";

export default function AccordionUsage({ data }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { language } = useLanguage();

  return (
    <div className="space-y-2">
      {data.map((e) => (
        <Accordion
          as="div"
          className="bg-[#363637] rounded-xl overflow-hidden"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            as="div"
            expandIcon={<ExpandMoreIcon className="text-[#848484] mt-4" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={`${
              expanded === "panel1" ? "text-yellow-400" : "text-white"
            } mgM:text-[2.9vw]`}
          >
            {e[language].title}
          </AccordionSummary>

          <AccordionDetails className="mgM:text-[2.7vw] ">
            {e[language].description}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>
          </AccordionDetails>
        </Accordion>
      ))}

    </div>
  );
}
