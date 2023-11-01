import React from "react";
import classes from "./Collections.module.scss";
import CollectionsTitle from "./CollectionsTitle/CollectionsTitle";
import CollectionsProduct from "./CollectionsProduct/CollectionsProduct";
import ArrowButton from "../Buttons/ArrowButton/ArrowButton";

function Collections() {
  return (
    <div className={classes.container}>
      {/* <CollectionsTitle
        title="Features Collections"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
      /> */}
      <CollectionsProduct
        title="Featured product category"
        desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        desc2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ArrowButton name="Discover" />
    </div>
  );
}

export default Collections;
