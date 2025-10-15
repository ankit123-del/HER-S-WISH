import "./App.css";
import NavComp from "./navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Kurtis from "./kurtis";
import IndoWestern from "./indo-western";
import HomeFooter from "./home-footer";
import Dresses from "./dresses";
import KidsWear from "./kidsWear";
import Specials from "./specials";
import HomeFurnishing from "./homeFurnishing";
import SingleProductPage from "./singleProductPage";
import AddtoCart from "./addToCart";
import ConfirmOrderForm from "./finalDetails";
import OrderConfirmed from "./orderConfirmed";
import BuyNow from "./buyNow";
import AddtoWishlist from "./addToWishlist";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavComp />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<NavComp/>}></Route>
          <Route path="/kurtis" element={<Kurtis/>}></Route>
          <Route path="/indo-western" element={<IndoWestern/>}></Route>
          <Route path="/dresses" element={<Dresses/>}></Route>
          <Route path="/kids-wear" element={<KidsWear/>}></Route>
          <Route path="/specials" element={<Specials/>}></Route>
          <Route path="/home & furnishing" element={<HomeFurnishing/>}></Route>
          <Route path="/product/:id" element={<SingleProductPage/>}></Route>
          <Route path="/addtocart" element={<AddtoCart/>}></Route>
          <Route path="/addtowishlist" element={<AddtoWishlist/>}></Route>
          <Route path="/confirm" element={<ConfirmOrderForm/>}></Route>
          <Route path="/confirmed" element={<OrderConfirmed/>}></Route>
          <Route path="/buynow/:id" element={<BuyNow/>}></Route>
         
        </Routes>
        <HomeFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
