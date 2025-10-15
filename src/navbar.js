import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavComp() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [notLoggedIn, setnotLoggedIn] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {

    const openAccountBtn = document.getElementById("openAccountBtn");
    const account = document.getElementById("account");
    const createAccount = document.getElementById("createAccount");
    const login = document.getElementById("login");
    const accountForm = document.getElementById("accountForm");
    const loginFields = document.querySelector(".login-fields");
    const createAccountFields = document.querySelector(
      ".create-account-fields"
    );
    const closeLoginAccountBtn = document.getElementById(
      "closeLoginAccountBtn"
    );
    const closeCreateAccountBtn = document.getElementById(
      "closeCreateAccountBtn"
    );
    // ... (rest of your code)

    // Attach event listeners here
    openAccountBtn.addEventListener("click", function () {
      account.style.display = "flex";
    });

    createAccount.addEventListener("click", function (event) {
      event.preventDefault();
      createAccount.classList.add("active");
      login.classList.remove("active");
      loginFields.style.display = "none";
      createAccountFields.style.display = "block";
    });

    login.addEventListener("click", function (event) {
      event.preventDefault();
      login.classList.add("active");
      createAccount.classList.remove("active");
      createAccountFields.style.display = "none";
      loginFields.style.display = "block";
    });
    document.addEventListener("click", function (event) {
      if (!account.contains(event.target) && event.target !== openAccountBtn) {
        account.style.display = "none";
      }
    });

    const staticUsers = [
      { username: "akshat123@gmail.com", password: "dev123akshat" },
      // Add more user objects as needed
    ];

    accountForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = event.target.loginEmail.value;
      const password = event.target.loginPassword.value;
      const user = staticUsers.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        setLoading(true);
        setnotLoggedIn(false);

        // Simulate loading for 5 seconds
        setTimeout(() => {
          setLoading(false); // Hide loading message after 5 seconds
          console.log("Login successful");
          setLoggedIn(true);
          // After setting loggedIn to true
          localStorage.setItem("loggedInUser", username);
        }, 3000);
        // Successful login
        console.log("check");
      } else {
        setnotLoggedIn(true);
        setLoggedIn(false);
        // Invalid login
        console.log("Invalid credentials");
        // Handle form submission logic here
      }
    });

    document.querySelector('button[type="createAcc"]').addEventListener("click", function (event)  {
      event.preventDefault(); // Prevent the default form submission
    
      // Get the input values
      const email = document.querySelector('input[name="signupEmail"]').value;
      const password = document.querySelector('input[name="signupPassword"]').value;
      const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    
      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return; // Exit the function if passwords don't match
      }
    
      // Check if the email already exists in staticUsers array
      const existingUser = staticUsers.find(user => user.username === email);
      if (existingUser) {
        alert("User already exists. Please use a different email.");
        return; // Exit the function if user already exists
      }
    
      // Create a new user object and push it to staticUsers array
      const newUser = { username: email, password };
      staticUsers.push(newUser);
    
      // Optionally, you can clear the form fields after successful submission
      document.querySelector('input[name="signupEmail"]').value = "";
      document.querySelector('input[name="signupPassword"]').value = "";
      document.querySelector('input[name="confirmPassword"]').value = "";
    
      // Optionally, you can do something else after creating the account, such as showing a success message
      alert("Account created successfully!");
    });
    

    closeLoginAccountBtn.addEventListener("click", function () {
      account.style.display = "none";
      setLoggedIn(false);
      setnotLoggedIn(true);
      localStorage.removeItem("loggedInUser"); 
    });
    closeCreateAccountBtn.addEventListener("click", function () {
      account.style.display = "none";
      setLoggedIn(false);
      setnotLoggedIn(true);
      localStorage.removeItem("loggedInUser"); 
    });
  }, []);

  const handleViewCart = () => {
    if (!isLoggedIn) {
      // If the user is not logged in, display an alert and do not add the item to the cart
      alert("Please log in to view your cart.");
      return;
    }
  }

  const handleViewWishlist = () => {
    if (!isLoggedIn) {
      // If the user is not logged in, display an alert and do not add the item to the cart
      alert("Please log in to view your wishlist.");
      return;
    }
  }

  const handleLogout = () => {
      console.log("Logout successful");
      setLoggedIn(false);
      localStorage.removeItem("loggedInUser"); // Remove the user from local storage
      alert("Thanks for visiting")
      navigate('/')
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-collapse-width">
          <img
            className="qumash-logo"
            src={require(`./Navbar images/Her_s_wish.png`)}
            alt="logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink
                  to="/kurtis"
                  className="nav-link"
                  activeClassName="active"
                >
                  Kurtis|Suits<span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/indo-western" className="nav-link">
                  Indo-Western
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dresses" className="nav-link">
                  Dresses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/kids-wear" className="nav-link">
                  Kids Wear
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/specials" className="nav-link">
                  Specials
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/home & furnishing" className="nav-link">
                  Home&Furnishing
                </NavLink>
              </li>
              <form className="d-flex nav-item search-form" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
              <button type="button" className="user-icon">
                {!isLoggedIn ? (
                  <img
                    src={require(`./Navbar images/user.png`)}
                    alt=""
                    title="Account"
                    id="openAccountBtn"
                  />
                ) : (
                  <img
                    src={require(`./Navbar images/logout.png`)}
                    alt=""
                    title="Logout"
                    onClick={handleLogout}
                    />)}
              </button>
              <Link to={isLoggedIn ? "/addtowishlist" : ""}>
                {isLoggedIn?(
                  <button type="button" className="wishlist-icon">
                  <img
                    src={require(`./Navbar images/wishlist.png`)}
                    alt="wishlist"
                    title="wishlist"
                  />
                </button>
                ):(
                  <button type="button" className="wishlist-icon">
                  <img
                    src={require(`./Navbar images/wishlist.png`)}
                    alt="wishlist"
                    title="wishlist"
                    onClick={handleViewWishlist}
                  />
                </button>
                )
                }
              
              </Link>
            </ul>
          </div>
        </nav>
      </header>

      {/*account-form*/}
      <div id="account" className={`account ${isLoggedIn ? "hidden" : ""}`}>
        <div className="account-content">
          <div className="account-header">
            <Link to="#" className="account-option" id="createAccount">
              Create Account
            </Link>
            <Link to="#" className="account-option active" id="login">
              Login
            </Link>
          </div>
          <form id="accountForm" className="account-form">
            {/* <!-- Login Form Fields --> */}
            <div className="login-fields">
              <input type="email" name="loginEmail" placeholder="Email" />
              <input
                type="password"
                name="loginPassword"
                placeholder="Password"
              />
              <div className={`hidden ${notLoggedIn ? "wrong-login" : ""}`}>
                Incorrect username or password<br></br>
              </div>
              <button type="submit" style={{ marginRight: "10px" }}>
                Login
              </button>
              <button type="button" id="closeLoginAccountBtn">
                Cancel
              </button>
            </div>
            {/* <!-- Create Account Form Fields --> */}
            <div className="create-account-fields">
              <input type="email" name="signupEmail" placeholder="Email"/>
              <input
                type="password"
                name="signupPassword"
                placeholder="Password"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
              />
              <div className={`hidden ${notLoggedIn ? "wrong-login" : ""}`}>
                Incorrect username or password<br></br>
              </div>
              <button type="createAcc" style={{ marginRight: "10px" }}>
                Create Account
              </button>
              <button type="button" id="closeCreateAccountBtn">
                Cancel
              </button>
            </div>
          </form>
          {isLoading ? (
            <div className="loading-message">
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Cart */}
      <Link to={isLoggedIn ? "/addtocart" : ""}>
        {isLoggedIn? (
        <button type="button" className="cart-btn">
          <img
            src={require(`./Navbar images/shopping-cart.png`)}
            alt=""
            title="Cart"
          />
        </button>):(
          <button type="button" className="cart-btn">
          <img
            src={require(`./Navbar images/shopping-cart.png`)}
            alt=""
            title="Cart"
            onClick={handleViewCart}
          />
        </button>
        )}
      </Link>
    </>
  );
}
export default NavComp;
