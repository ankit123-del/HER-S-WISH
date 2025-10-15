import CardLayout from "./card-layout";
import Data from "./allProductDetails";

function IndoWestern() {
  const filteredData = Data.filter(item => item.id.includes("indo"));
  return (
    <div className="single-category-section">
      <CardLayout data={filteredData} />
    </div>
  );
}
export default IndoWestern;