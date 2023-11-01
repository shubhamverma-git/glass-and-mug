import React from "react";
import classes from "./Contact.module.scss";
import HeroContainer from "@/components/home/hero/hero";
import Contact from "@/components/common/Contact/Contact";
import Culture from "@/components/Culture/Culture";
import { getContactData } from "@/services/contactPageServices";

async function ContactPage() {
  const data = await getData();

  return (
    <div className={classes.container}>
      <HeroContainer
        bannerImageData={data?.Contact_hero?.data?.attributes?.url}
      />
      <Contact
        title={data?.contact_header?.title}
        desc={data?.contact_header?.description_1}
      />
      {console.log(data)};
      <Culture
        title={data?.contact_culture_section?.contact_culture_header?.title}
        desc_1={
          data?.contact_culture_section?.contact_culture_header?.description_1
        }
        cultureImage={data?.contact_culture_section?.contact_image}
        customClass={classes.culture}
      />
    </div>
  );
}

export default ContactPage;

async function getData() {
  return await getContactData().then((res) => res.data.data.attributes);
}
