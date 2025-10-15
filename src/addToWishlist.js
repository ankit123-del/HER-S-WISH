import { useState } from "react";
import { Link } from "react-router-dom";

function AddtoWishlist() {
  const handleAddToCart = () => {
    handleAddToCart();
  };

  const username = localStorage.getItem("loggedInUser");

  // Retrieve the "wishlistObject" from localStorage
  const wishlistObjectJSON = localStorage.getItem("wishlistObject");
  const wishlistObject = JSON.parse(wishlistObjectJSON) || {};

  // Retrieve the wishlist data for the current user based on the username
  const [userWishlist, setUserWishlist] = useState(
    wishlistObject[username] || []
  );

  // Function to remove an item from the wishlist
  const handleRemoveFromWishlist = (itemId) => {
    // Find the index of the item to remove
    const itemIndex = userWishlist.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      // Create a copy of the userWishlist array
      const updatedWishlist = [...userWishlist];

      // Remove the item from the copied array
      updatedWishlist.splice(itemIndex, 1);

      // Update the userWishlist state with the updated array
      setUserWishlist(updatedWishlist);

      // Update the wishlist data for the current user in the wishlist object
      wishlistObject[username] = updatedWishlist;

      // Store the updated wishlist object back in localStorage
      localStorage.setItem("wishlistObject", JSON.stringify(wishlistObject));
    }
  };

  return (
    <>
    <div className="container">
      <div style={{ paddingTop: "7vw" }}>
        <div className="wishlist-head">
          <h1 className="wishlist-title">My Wishlist</h1>
        </div>
        <ul className="wishlist-cardholder">
          {userWishlist.map((item) => (
            <li
              key={item.id}
              className="wishlist-li"
            >
              <div class="card wishlist-card" style={{ flexDirection: "row" }} key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.img}
                    class="card-img wishlist-card-img"
                    alt={item.title}
                  />
                </Link>
                <div class="card-body wishlist-card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text">{item.description}</p>
                  <h6>₹{item.price}/-</h6>
                  <br />
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <Link to={`/buynow/${item.id}`}>
                  <button className="btn btn-success wishlist-btn">Buy Now</button>
                  </Link>
                  <button
                    className="btn btn-primary wishlist-btn"
                    onClick={() => handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="btn btn-danger wishlist-btn"
                  >
                    Remove
                  </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}
export default AddtoWishlist;
