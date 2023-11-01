import React from "react";
import classes from "./productDetails.module.scss";
import Text from "@/components/loaders/Text";
import Card from "@/components/loaders/Card";

function Loading() {
  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.data}`}>
        <div className={`${classes.image_container}`}>
          <Card className={classes.image} />
        </div>
        <div className={classes.details}>
          <div className={classes.productHeading}>
            <Text />
            <Text />
          </div>
          <div className={classes.attributes}>
            {Array(6)
              .fill({})
              ?.map((item, index) => (
                <div key={index} className={classes.attribute_container}>
                  <Text />
                </div>
              ))}
          </div>
          <Card className={classes.image} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Text />
        <div>
          <Card className={classes.image} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
