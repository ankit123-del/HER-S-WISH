import Data from "./allProductDetails";
import CardLayout from "./card-layout";

function Kurtis() {
  const filteredData = Data.filter(item => item.id.includes("kurti"));
  return (
    <div className="single-category-section">
      <CardLayout data={filteredData} />
    </div>
  );
}

export default Kurtis;