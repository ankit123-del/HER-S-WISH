import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  const handleLoginAlert = () => {
    alert('Please log in to make a purchase.');
  };

  // Get the username of the logged-in user
  const username = localStorage.getItem("loggedInUser");
  const handleAddToCart = () => {
    if (!username) {
      // If the user is not logged in, display an alert and do not add the item to the cart
      alert("Please log in to add items to your cart.");
      return;
    }

    // Get the cart object from localStorage or initialize an empty object
    const cartObject = JSON.parse(localStorage.getItem("cartObject")) || {};

    // Get the cart data for the current user or initialize an empty array
    const userCart = cartObject[username] || [];

    // Check if the product is already in the cart
    const isProductInCart = userCart.some((item) => item.id === props.id);

    if (!isProductInCart) {
      // Add the product to the user's cart array
      userCart.push({
        id: props.id,
        img: props.img,
        description: props.description,
        title: props.title,
        price: props.price,
        // Add other relevant data here
      });

      // Update the cart data for the current user in the cart object
      cartObject[username] = userCart;

      // Store the updated cart object back in localStorage
      localStorage.setItem("cartObject", JSON.stringify(cartObject));

      // Optionally, you can display a notification to the user that the item was added to the cart
      alert("Item added to cart!");
    } else {
      alert("Item is already in the cart.");
    }
  };

  //   Wishlist
  const handleWishlist = () => {
    // Get the username of the logged-in user
    const username = localStorage.getItem("loggedInUser");

    if (!username) {
      // If the user is not logged in, display an alert and do not add the item to the cart
      alert("Please log in to add items to your wishlist.");
      return;
    }

    // Get the cart object from localStorage or initialize an empty object
    const wishlistObject =
      JSON.parse(localStorage.getItem("wishlistObject")) || {};

    // Get the cart data for the current user or initialize an empty array
    const userWishlist = wishlistObject[username] || [];

    // Check if the product is already in the cart
    const isProductInWishlist = userWishlist.some(
      (item) => item.id === props.id
    );

    if (!isProductInWishlist) {
      // Add the product to the user's cart array
      userWishlist.push({
        id: props.id,
        img: props.img,
        description: props.description,
        title: props.title,
        price: props.price,
        // Add other relevant data here
      });

      // Update the cart data for the current user in the cart object
      wishlistObject[username] = userWishlist;

      // Store the updated cart object back in localStorage
      localStorage.setItem("wishlistObject", JSON.stringify(wishlistObject));

      // Optionally, you can display a notification to the user that the item was added to the cart
      alert("Item added to wishlist!");
    } else {
      alert("Item is already in the wishlist.");
    }
  };

  return (
    <div
      class="container mb-5 single-product-card"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 ">
          <div class="card">
            <div class="row spp">
              <div class="col-md-6 col-12">
                <div class="images p-3">
                  <div class="text-center p-4">
                    
                    <img
                      src={props.img}
                      alt="product"
                      width="90%"
                      height={"80%"}
                      className="zoom"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="product p-4">
                  <button
                    type="button"
                    style={{
                      float: "right",
                      fontSize: "22px",
                      border: "none",
                      background: "none",
                    }}
                    onClick={handleWishlist}
                  >
                    <i class="fa fa-heart text-muted" title="Add to Wishlist"></i>
                  </button>
                  <div class="mt-4 mb-3 sp-details">
                    
                    <span class="text-uppercase text-muted brand sp-head">
                      <b>{props.title}</b>
                    </span>
                    <h5 class="text-uppercase sp-description">{props.description}</h5>
                    <div class="price d-flex flex-row align-items-center">
                      
                      <span
                        class="act-price"
                        style={{ fontSize: "20px", fontWeight: "bolder" }}
                      >
                        ₹{props.price}/-
                      </span>
                      <div
                        class="ml-2"
                        style={{ justifyContent: "space-around" }}
                      >
                        
                        <small class="dis-price">
                          <strike style={{ color: "red" }}>
                            ₹{props.prePrice}
                          </strike>
                        </small>
                        <span>{props.discount}</span>
                      </div>
                    </div>
                  </div>
                  <Rating
                    name="half-rating-read"
                    defaultValue={props.rating}
                    precision={0.1}
                    readOnly
                  />
                  <div class="sizes mt-5">
                    {console.log("Rating:", props.rating)}
                    <h6 class="text-uppercase">Size</h6>
                    <label class="radio">
                      
                      <input type="radio" name="size" value="S" checked />
                      <span>S</span>
                    </label>
                    <label class="radio">
                      
                      <input type="radio" name="size" value="M" />
                      <span>M</span>
                    </label>
                    <label class="radio">
                      
                      <input type="radio" name="size" value="L" />
                      <span>L</span>
                    </label>
                    <label class="radio">
                      
                      <input type="radio" name="size" value="XL" />
                      <span>XL</span>
                    </label>
                    <label class="radio">
                      
                      <input type="radio" name="size" value="XXL" />
                      <span>XXL</span>
                    </label>
                  </div>
                  <div className="sp-btns">
                  <Link to={username ? `/buynow/${props.id}` : ""}>
                    <div class="cart mt-4 align-items-center">
                      {username ? (
                        <button class="btn btn-danger text-uppercase mr-2 px-4">
                          Buy Now
                        </button>
                      ) : (
                        <button
                          class="btn btn-danger text-uppercase mr-2 px-4"
                          onClick={handleLoginAlert}
                        >
                          Buy Now
                        </button>
                      )}
                    </div>
                  </Link>
                  <div class="cart mt-4 align-items-center">
                    <button
                      class="btn btn-danger text-uppercase mr-2 px-4"
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
