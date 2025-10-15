import CardLayout from "./card-layout";
import Data from "./allProductDetails";


function Dresses() {
  const filteredData = Data.filter(item => item.id.includes("dress"));
  return (
    
    <div className="single-category-section">
      <CardLayout data={filteredData} />
    </div>
  );
}
export default Dresses;