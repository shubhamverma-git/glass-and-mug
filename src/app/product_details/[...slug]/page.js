import ContactForm from "@/components/Forms/Contact/ContactForm";
import { getProductDetails } from "@/services/productsServices";
import Image from "next/image";
import React from "react";
import classes from "./productDetails.module.scss";
import Accordion from "@/components/Accordion/Accordion";

const productDetails = async (props) => {
  const productData = await getData(
    props?.params?.slug[props?.params?.slug.length - 1]
  );

  return (
    <>
      <div className={classes.container}>
        <div className={classes.data}>
          <div className={classes.image_container}>
            {productData?.image_url?.data[0]?.attributes?.url && (
              <Image
                src={`https://osmicglass.droot.in${productData.image_url?.data[0]?.attributes?.url}`}
                width={1200}
                height={1200}
                alt="product image"
                objectFit="cover"
                className={classes.image}
              />
            )}
          </div>
          <div className={classes.details}>
            <div className={classes.productHeading}>
              <h2>{productData?.name}</h2>
              <h3>{productData?.description}</h3>
            </div>
            <div className={classes.attributes}>
              {productData?.product_attributes?.map((item, index) => (
                <div key={index} className={classes.attribute_container}>
                  <h3>
                    {item?.attribute_name} : {item?.attribute_value}
                  </h3>
                </div>
              ))}
            </div>

            <ContactForm hasUpload={false} page={"product_details"} />
          </div>
        </div>
        <div>
          {productData?.faq_block && (
            <Accordion faqList={productData?.faq_block} />
          )}
        </div>
      </div>
    </>
  );
};

export default productDetails;

async function getData(id) {
  return await getProductDetails(id).then((res) => res.data.data[0].attributes);
}
