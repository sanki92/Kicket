import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="space-y-2">
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
          }`}
        >
          1 Lorem ipsum dolor sit amet, consectetur
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>

        </AccordionDetails>
      </Accordion>

      <Accordion
        as="div"
        className="bg-[#363637] rounded-xl overflow-hidden"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
        as="div"
          expandIcon={<ExpandMoreIcon className="text-[#848484] mt-4" />}
          aria-controls="panel2-content"
          id="panel2-header"
          className={`${
            expanded === "panel2" ? "text-yellow-400" : "text-white"
          }`}
        >
          2 Lorem ipsum dolor sit amet, consectetur
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>

        </AccordionDetails>
      </Accordion>

      <Accordion
        as="div"
        className="bg-[#363637] rounded-xl overflow-hidden"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
        as="div"
          expandIcon={<ExpandMoreIcon className="text-[#848484] mt-4" />}
          aria-controls="panel3-content"
          id="panel3-header"
          className={`${
            expanded === "panel3" ? "text-yellow-400" : "text-white"
          }`}
        >
          3 Lorem ipsum dolor sit amet, consectetur
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>

        </AccordionDetails>
      </Accordion>

      <Accordion
        as="div"
        className="bg-[#363637] rounded-xl overflow-hidden"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
        as="div"
          expandIcon={<ExpandMoreIcon className="text-[#848484] mt-4" />}
          aria-controls="panel4-content"
          id="panel4-header"
          className={`${
            expanded === "panel4" ? "text-yellow-400" : "text-white"
          }`}
        >
          4 Lorem ipsum dolor sit amet, consectetur
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>

        </AccordionDetails>
      </Accordion>

      <Accordion
        as="div"
        className="bg-[#363637] rounded-xl overflow-hidden"
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
        as="div"
          expandIcon={<ExpandMoreIcon className="text-[#848484] mt-4" />}
          aria-controls="panel5-content"
          id="panel5-header"
          className={`${
            expanded === "panel5" ? "text-yellow-400" : "text-white"
          }`}
        >
          5 Lorem ipsum dolor sit amet, consectetur
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#ffc019] via-[#ed4c75] via-[#973eff] to-[#00d6cc]"></div>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
