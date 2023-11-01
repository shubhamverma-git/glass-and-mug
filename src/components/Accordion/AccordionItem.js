import React, { useState } from "react";
import classes from "./Accordion.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen((p) => !p);
  };
  return (
    <div className={`${classes.container}`}>
      <div className={classes.faq_container}>
        <button className={classes.accordion_btn} onClick={clickHandler}>
          <div className={classes.btn_content}>
            <h3 style={{ color: open ? "#9d6716" : "#1C0802" }}>{question}</h3>
          </div>

          {open ? (
            <AiOutlineMinus
              className={classes.icon}
              style={{ color: open && "#9d6716" }}
            />
          ) : (
            <AiOutlinePlus className={classes.icon} />
          )}
        </button>
        {open && (
          <div className={classes.accordion_body}>
            <p className={classes.faq_answer}>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccordionItem;
