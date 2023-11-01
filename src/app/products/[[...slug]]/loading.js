import Card from "@/components/loaders/Card";
import Text from "@/components/loaders/Text";
import React from "react";

function Loading() {
  return (
    <div style={{ height: "500px", padding: "200px" }}>
      <div>
        <Card />
        <Text />
      </div>
    </div>
  );
}

export default Loading;
