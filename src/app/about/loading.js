import Card from "@/components/loaders/Card";
import Text from "@/components/loaders/Text";
import React from "react";

function Loading() {
  return (
    <div style={{ height: "100vh", padding: "200px" }}>
      loading...
      <Card />
      <Text />
    </div>
  );
}

export default Loading;
