import React from "react";
import CardLayout from "./card-layout";
import Data from "./allProductDetails";

function HomeFurnishing() {
  const filteredData = Data.filter(item => item.id.includes("homeFurnishing"));
  return (
    <div className="single-category-section">
      <CardLayout data={filteredData} />
    </div>
  );
}
export default HomeFurnishing;

