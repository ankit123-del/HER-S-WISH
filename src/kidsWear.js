import Data from "./allProductDetails";
import CardLayout from "./card-layout";

function KidsWear() {
  const filteredData = Data.filter(item => item.id.includes("kids"));
  return (
    <div className="single-category-section">
      <CardLayout data={filteredData} />
    </div>
  );
}

export default KidsWear;