import React from "react";
import classes from "./About.module.scss";
import HeroContainer from "@/components/home/hero/hero";
import Culture from "@/components/Culture/Culture";
import Accordion from "@/components/Accordion/Accordion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { getAboutData } from "@/services/aboutPageServices";
import Link from "next/link";
import ArrowButton from "@/components/common/Buttons/ArrowButton/ArrowButton";

async function About() {
  const data = await getData();
  console.log(data);

  return (
    <div className={classes.container}>
      <HeroContainer
        description={data?.about_hero_section?.about_description?.title}
        bannerImageData={
          data?.about_hero_section?.about_banner?.data?.attributes?.url
        }
        customClass={classes.hero_container}
        matrixData={data?.about_hero_section?.matrices?.data}
      />
      <div className={classes.mission_container}>
        <div className={classes.mission_image}>
          <Image
            src={`https://osmicglass.droot.in${data?.about_body_content[0]?.image?.data[0]?.attributes?.url}`}
            alt="product image"
            objectFit="cover"
            width={100}
            height={100}
            className={classes.img1}
          />
          <Image
            src={`https://osmicglass.droot.in${data?.about_body_content[0]?.image?.data[1]?.attributes?.url}`}
            alt="product image"
            width={100}
            objectFit="cover"
            height={100}
            className={classes.img2}
          />
        </div>
        {data?.about_body_content?.length > 0 && (
          <SectionHeader
            customClass={classes.moreItem}
            title={data?.about_body_content[0]?.mission_section_block?.title}
            desc_1={
              data?.about_body_content[0]?.mission_section_block?.description_1
            }
          />
        )}
      </div>
      <div className={classes.products_quality}>
        <div className={classes.image_container}>
          {productImage.map((i, idx) => (
            <div key={idx} className={classes.image}>
              <Image
                src={i.src}
                alt={i.alt}
                height={i.height}
                width={i.width}
                className={classes.quality_image}
              />
            </div>
          ))}
        </div>

        <div className={classes.description}>
          {data?.about_body_content?.length > 0 && (
            <SectionHeader
              customClass={classes.moreItem}
              title={data?.about_body_content[1]?.mission_section_block?.title}
              desc_1={
                data?.about_body_content[1]?.mission_section_block
                  ?.description_1
              }
            />
          )}
          <Link className={classes.btn} href={"/products"}>
            <ArrowButton name="Explore" />
          </Link>
        </div>
      </div>
      <Culture
        title={data?.culture_section?.culture_details?.title}
        desc_1={data?.culture_section?.culture_details?.description_1}
        customClass={classes.culture}
        moreImage={data?.culture_section?.culture_image?.data}
        source={data?.culture_section}
      />
      <div className={classes.faq_container}>
        <Accordion faqData={data?.faq_block?.about_faq} />
      </div>
    </div>
  );
}

export default About;

async function getData() {
  return await getAboutData().then((res) => res.data.data.attributes);
}

const productImage = [
  {
    src: "https://osmicglass.droot.in/uploads/unsplash_Nmvlg_Nc76_HA_334d3a56f2.png",

    alt: "",
    height: "170",
    width: "175",
  },
  {
    src: "https://osmicglass.droot.in/uploads/unsplash_Nmvlg_Nc76_HA_334d3a56f2.png",
    alt: "",
    height: "270",
    width: "175",
  },
  {
    src: "https://osmicglass.droot.in/uploads/unsplash_Nmvlg_Nc76_HA_334d3a56f2.png",
    alt: "",
    height: "360",
    width: "215",
  },
];
