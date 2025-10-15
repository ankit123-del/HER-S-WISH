import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Data from "./allProductDetails";

function BuyNow() {
  const { id } = useParams(); // Get the product ID from URL params
  console.log(id);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Find the product based on the product ID
    const selectedProduct = Data.find((product) => product.id === id);
    if (selectedProduct) {
      setProduct(selectedProduct);
      calculateTotalAmount(selectedProduct.price, quantity);
    }
  }, [id, quantity]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    calculateTotalAmount(product.price, newQuantity);
  };

  const calculateTotalAmount = (price, qty) => {
    const priceWithoutCommas = parseFloat(price.replace(/,/g, ""));
    const total = priceWithoutCommas * qty;
    setTotalAmount(total);
  };

  return (
    <div className="buynow-card">
      {product ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div class="card mb-3" style={{ maxWidth: "90%" }}>
                <div class="row g-0">
                  <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <img
                      src={product.img}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="buyNow-card-body card-body">
                      <h1 class="card-title">{product.head}</h1>
                      <p
                        class="card-text buynow-price"
                      >
                        ₹{product.price}/-
                      </p>
                      <label className="mt-3">
                        {/* <br />
                        <br /> */}
                        <b>Quantity:</b>
                        <input
                          type="number"
                          value={quantity}
                          onChange={handleQuantityChange}
                          min={1}
                        />
                      </label>
                      <hr />
                      <p className="buynow-total">
                        <b style={{ color: "crimson" }}>Total Amount:</b>{" "}
                        <b>₹{totalAmount}/-</b>
                      </p>
                      <Link
                        to="/confirm"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <button
                          className="btn btn-primary place-order-btn"
                        >
                          Place Order
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 hide"
              style={{ marginLeft: "-100px" }}
            >
              <img
                src={require(`./additional images/buynow.png`)}
                alt="..."
                className="buynow-cardimg"
              />
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ padding: "20vw" }}>Product Out of Stock.</h1>
      )}
    </div>
  );
}

export default BuyNow;
