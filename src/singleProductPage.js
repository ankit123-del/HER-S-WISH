import SingleProduct from "./singleProductLayout";
import Data from "./allProductDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching data from a server
    const fetchedProduct = Data.find((item) => item.id === (id));
    console.log(fetchedProduct)
    setProduct(fetchedProduct);
  }, [id]);
  


  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <SingleProduct
        id={product.id}
        img={product.img}
        title={product.head}
        description={product.description}
        price={product.price}
        prePrice={product.prePrice}
        discount={product.discount}
        rating={product.rating}
      />
    </>
  );
}
export default SingleProductPage;
