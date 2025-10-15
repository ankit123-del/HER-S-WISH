import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { useState } from 'react';

function AddtoCart() {
  // const cartItems = JSON.parse(localStorage.getItem("userCart")) || [];
  const navigate = useNavigate();

  const username = localStorage.getItem('loggedInUser'); // Replace with your logic to get the username

  // Retrieve the "cartObject" from localStorage
  const cartObjectJSON = localStorage.getItem('cartObject');
  const cartObject = JSON.parse(cartObjectJSON) || {};

  // Retrieve the cart data for the current user based on the username
  const userCart = cartObject[username] || [];


  // Step 1: Create a state to manage quantities
  const [quantities, setQuantities] = useState(
    Object.fromEntries(userCart.map((item) => [item.id, 1]))
  );

  // Function to update quantity for an item
  const handleQuantityChange = (itemId, newQuantity) => {
    // Step 4: Update the quantity in the state
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  // Function to remove an item from the cart
  const handleRemoveFromCart = (itemId) => {
    // Find the index of the item to remove
    const itemIndex = userCart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      // Remove the item from the cart array
      userCart.splice(itemIndex, 1);

      // Update the cart data for the current user in the cart object
      cartObject[username] = userCart;

      // Store the updated cart object back in localStorage
      localStorage.setItem('cartObject', JSON.stringify(cartObject));

      // // Force a re-render by reloading the page (or use a routing library to navigate to the cart page)
      // window.location.reload(); // This will refresh the page to reflect the updated cart

      // Use React Router to navigate to the cart page
      navigate('/addtocart');
  };
    
  };

    // Function to calculate the total price of all items in the cart
    const calculateTotalPrice = () => {
      let total = 0;
  
      if (userCart && userCart.length > 0) {
        // Iterate through the cart items and calculate the total price
        userCart.forEach((item) => {
          // Get the quantity of the item from the quantities state
          const quantity = quantities[item.id];

      const priceWithoutCommas = parseFloat(item.price.replace(/,/g, ''));
      // Ensure quantity is a valid number
      if (!isNaN(quantity)) {
        // Calculate the subtotal for this item (quantity * price)
        let subtotal = parseFloat(quantity) * priceWithoutCommas;

        // Check if subtotal is a valid number before adding to the total
        if (!isNaN(subtotal)) {
          // Add the subtotal to the total
          total += subtotal;
        }
      }
    });
  }

  return parseFloat(total);
};

  return (
    <>
  <div className='container'>
    <div style={{paddingTop:"7.1vw"}}>
      <div className='cart-head'>
      <h1 className='cart-title'>My Cart</h1>
      </div>
      <ul className='cart-cardholder'>
        {userCart.map((item) => (
          <li key={item.id} className='cart-li'>
          <div class="card cart-card" key={item.id}>
            <Link to={`/product/${item.id}`}>
            <img src={item.img} class="card-img cart-card-img" alt={item.title} />
            </Link>
            <div class="card-body cart-card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">
                {item.description}
              </p>
              <h6>{item.price}/-</h6>
              {/* Step 2: Add a quantity input field */}
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={quantities[item.id]}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    min="1"
                  /><br/>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="btn btn-danger cart-card-btn"
              >
                Remove
              </button>
            </div>
          </div>
          </li>
        ))}
        
      </ul>
    </div>
    <hr/>
    <h5 style={{textAlign:"center"}}><b style={{color:"crimson"}}>Total Amount:  </b>₹{calculateTotalPrice()}/-</h5><br/>
    <div style={{display:"flex",justifyContent:"center"}}>
      <Link to="/confirm" style={{textDecoration:"none",color:"white"}}>
    <button className='btn btn-primary cart-placeOrder-btn'>Place Order</button>
    </Link>
    </div>
    </div>
    </>
  );
}
export default AddtoCart;
