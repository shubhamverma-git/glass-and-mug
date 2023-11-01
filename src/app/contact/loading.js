import React from "react";
import classes from "./Contact.module.scss";
import Text from "@/components/loaders/Text";
import Card from "@/components/loaders/Card";

function Loading() {
  return (
    <>
      <div
        style={{
          height: "500px",
          margin: "0 20px",
          backgroundColor: "lightgray",
          borderRadius: "10px",
        }}
      ></div>
      <div style={{ display: "flex", gap: "40px" }}>
        <Text />
        <Card />
      </div>
    </>
  );
}

export default Loading;
