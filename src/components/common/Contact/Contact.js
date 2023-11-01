"use client";
import React from "react";
import classes from "./Contact.module.scss";
import ContactForm from "@/components/Forms/Contact/ContactForm";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

function Contact({ customClass, title, desc }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <div className={classes.description}>
        <SectionHeader
          customClass={classes.contact_info}
          title={title}
          desc_1={desc}
        />
      </div>
      <div className={classes.form}>
        <ContactForm hasUpload={true} customClass={classes.contact_form} />
      </div>
    </div>
  );
}

export default Contact;
