import classes from "./home.module.scss";
import HeroContainer from "@/components/home/hero/hero";
import Explore from "@/components/Explore/Explore";
import Contact from "@/components/common/Contact/Contact";
import ImageFrame from "@/components/ImageFrame/ImageFrame";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import CollectionsProduct from "@/components/common/Collections/CollectionsProduct/CollectionsProduct";
import CollectionsImg from "@/components/common/Collections/CollectionsImg/CollectionsImg";
import { getHomeData } from "@/services/homePageServices";
import DescriptionCard from "@/components/Cards/DescriptionCard/DescriptionCard";
import FeedbackCard from "@/components/Cards/FeedbackCard/Feedback";
import { getAllProducts } from "@/services/productsServices";
import ProductFilter from "@/components/productFilter/ProductFilter";
import MaterialCard from "@/components/Cards/MaterialCard/MaterialCard";

async function Home() {
  const { data, productData } = await getData();

  return (
    <main className={classes.main}>
      <HeroContainer
        bannerImageData={
          data?.hero_container?.hero_banner?.data?.attributes?.url
        }
        matrixData={data?.hero_container?.matrices?.data}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SectionHeader
          title={data?.process_container?.section_block?.title}
          desc_1={data?.process_container?.section_block?.description_1}
          customClass={classes.intro_container}
        />
      </div>
      <DescriptionCard
        cardData={data?.process_container?.home_process_block}
        customClass={classes.description_card}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SectionHeader
          title={data?.product_gallery?.gallery_header?.title}
          desc_1={data?.product_gallery?.gallery_header?.description_1}
          customClass={classes.welcome}
        />
      </div>
      <div className={classes.product_container}>
        <div>
          <ProductFilter data={productData} />
        </div>
      </div>
      <div className={classes.feature_collection}>
        <CollectionsImg
          source={`https://osmicglass.droot.in${data?.category_section_container?.Category_container[0]?.category_section_banner?.data?.attributes?.url}`}
          customClass={classes.feature_img}
        />
        <CollectionsProduct
          customClass={classes.product_description1}
          title={
            data?.category_section_container?.Category_container[0]
              ?.category_section_details?.title
          }
          desc1={
            data?.category_section_container?.Category_container[0]
              ?.category_section_details?.description_1
          }
          desc2={
            data?.category_section_container?.Category_container[0]
              ?.category_section_details?.description_2
          }
          btnName={
            data?.category_section_container?.Category_container[0]
              ?.category_section_details?.button_name
          }
          onClick={"products/feature"}
          source={
            data?.category_section_container?.Category_container[0]
              ?.category_section_side_image?.data?.attributes?.url
          }
        />
      </div>
      <div className={classes.diwali_collection}>
        <CollectionsImg
          source={`https://osmicglass.droot.in${data?.category_section_container?.Category_container[1]?.category_section_banner?.data?.attributes?.url}`}
          customClass={classes.feature_img}
        />
        <CollectionsProduct
          customClass={classes.product_description2}
          data={data}
          title={
            data?.category_section_container?.Category_container[1]
              ?.category_section_details?.title
          }
          desc1={
            data?.category_section_container?.Category_container[1]
              ?.category_section_details?.description_1
          }
          desc2={
            data?.category_section_container?.Category_container[1]
              ?.category_section_details?.description_2
          }
          btnName={
            data?.category_section_container?.Category_container[0]
              ?.category_section_details?.button_name
          }
          onClick={"/products/diwali"}
          source={
            data?.category_section_container?.Category_container[1]
              ?.category_section_side_image?.data?.attributes?.url
          }
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SectionHeader
          customClass={classes.explore_us}
          title={data?.home_material?.home_material_section_block?.title}
          desc_1={
            data?.home_material?.home_material_section_block?.description_1
          }
        />
      </div>

      <MaterialCard cardData={data?.home_material?.materials?.data} />
      <Explore data={data?.explore_section} customClass={classes.explore} />
      <div className={classes.feedback_container}>
        <SectionHeader
          customClass={classes.trust_container}
          title={data?.testimonial_container?.testimonial_header?.title}
          desc_1={
            data?.testimonial_container?.testimonial_header?.description_1
          }
        />
        <FeedbackCard
          cardData={data?.testimonial_container?.testimonials}
          customClass={classes.feedback_card}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <ImageFrame
          title={data?.manufacturing_section?.manufacturing_header?.title}
          customClass={classes.manufacturing_container}
          imgData={data?.manufacturing_section?.manufacturing_image}
          videoData={data?.manufacturing_section?.video_url}
        /> */}
      </div>
      <Contact
        title={data?.enquiry_container?.title}
        desc={data?.enquiry_container?.description_1}
        customClass={classes.contact}
      />
    </main>
  );
}

export default Home;

async function getData() {
  const data = await getHomeData().then((res) => res.data.data.attributes);
  const productData = await getAllProducts().then((res) => res.data.data);
  return { data, productData };
}
