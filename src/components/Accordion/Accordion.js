"use client";
import React, { useState } from "react";
import classes from "./Accordion.module.scss";
import AccordionItem from "./AccordionItem";
import SectionHeader from "../SectionHeader/SectionHeader";

function Accordion({ faqData }) {
  const [openId, setId] = useState(null);

  return (
    <div className={classes.accordion_container}>
      <div className={classes.title_container}>
        <SectionHeader
          title="Frequently Asked Questions"
          desc_1="Welcome to our learning hub! Here are some of the most frequently asked questions from our visitors"
          customClass={classes.title_text}
        />
      </div>
      <div className={classes.faq_section}>
        {faqData?.map((item, index) => (
          <AccordionItem
            question={item?.question}
            answer={item?.answer}
            isOpen={index === openId}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
