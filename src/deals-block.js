import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./App.css";

class DealsBlock extends React.Component {
 render() {
   return (
    <>
     <div className="section">
      <div className="deals-header container">
       <h1><b>GREAT! DEALS!!</b></h1>
       <span><b>Get the Biggest Deals Ever!</b></span>
       </div>
       <Carousel autoPlay interval="5000" transitionTime="10000ms" infiniteLoop>
         <div>
         <div className="container cont" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/deal-1`} className="col-md-2 col-lg-2 col-sm-3 col-4 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-1.jpg`)} alt="product-1" className="deals-img"/><hr/>
                <div style={{ textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Lorem</b></h4>
                  <span className="deals-span">Lorem ipsum dolor sit amet hfkoj</span><br/>
                  <span className="deals-span"><b className="deals-price">₹949/- </b><strike className="deals-strike"> ₹1,999</strike> (-53%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/deal-2`} className="col-md-2 col-lg-2 col-sm-3 col-4 " style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-2.jpg`)} alt="product-2" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>dolore</b></h4>
                  <span className="deals-span">Lorem ipsum dolor sit amet</span><br/>
                  <span><b className="deals-price">₹1,700/- </b><strike className="deals-strike"> ₹2,550</strike> (-53%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/deal-3`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-3.jpg`)} alt="product-3" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Lorem</b></h4>
                  <span className="deals-span">consectetur adipiscing el</span><br/>
                  <span className="deals-span"><b className="deals-price">₹1,049/- </b><strike className="deals-strike"> ₹2,499</strike> (-58%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/deal-4`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black"}}>
                <img src={require(`./deals images/deal-4.jpg`)} alt="product-4" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Excepteur</b></h4>
                  <span className="deals-span">reprehenderit in voluptate kjfkl olejd</span><br/>
                  <span><b className="deals-price">₹999/- </b><strike className="deals-strike"> ₹2,500</strike> (-60%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/deal-5`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-5.jpg`)} alt="product-5" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Duis aute</b></h4>
                  <span className="deals-span">aliquip ex ea commodo consequat</span><br/>
                  <span className="deals-span"><b className="deals-price">₹1,999/- </b><strike className="deals-strike"> ₹3,999</strike> (-50%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/deal-6`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./deals images/deal-6.jpg`)} alt="product-6" className="deals-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4 className="heading4"><b>veniam</b></h4>
                  <span className="deals-span">culpa qui officia deserunt</span><br/>
                  <span className="deals-span"><b className="deals-price">₹2,900/- </b><strike className="deals-strike"> ₹3,999</strike> (-27.5%)</span>
                  </div>
                  </Link>
              </div>
           </div>
         </div>  
         <div className="container cont" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/deal-6`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-6.jpg`)} alt="product-7" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>BIBA</b></h4>
                  <span className="deals-span">Pink Net Embroidered Set hfn ihnfjbd khnfj</span><br/>
                  <span className="deals-span"><b className="deals-price">₹3999/- </b><strike className="deals-strike"> ₹4,799</strike> (-20%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/deal-5`} className="col-md-2 col-lg-2 col-sm-3 col-4 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-5.jpg`)} alt="product-8" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>veniam</b></h4>
                  <span className="deals-span">culpa qui officia deserunt</span><br/>
                  <span className="deals-span"><b className="deals-price">₹1,999/- </b><strike className="deals-strike"> ₹5,999</strike> (-66%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/deal-4`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-4.jpg`)} alt="product-9" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Duis aute</b></h4>
                  <span className="deals-span">aliquip ex ea commodo consequat</span><br/>
                  <span className="deals-span"><b className="deals-price">₹3999/- </b><strike className="deals-strike"> ₹4,799</strike> (-20%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/deal-3`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-3.jpg`)} alt="product-10" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>JExcepteur</b></h4>
                  <span className="deals-span">reprehenderit in voluptate kjfkl olejd</span><br/>
                  <span className="deals-span"><b className="deals-price">₹1,999/- </b><strike className="deals-strike"> ₹5,999</strike> (-66%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/deal-2`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-2.jpg`)} alt="product-11" className="deals-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Lorem</b></h4>
                  <span className="deals-span">consectetur adipiscing el</span><br/>
                  <span className="deals-span"><b className="deals-price">₹3999/- </b><strike className="deals-strike"> ₹4,799</strike> (-20%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/deal-1`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./deals images/deal-1.jpg`)} alt="product-12" className="deals-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4 className="heading4"><b>dolore</b></h4>
                  <span className="deals-span">Lorem ipsum dolor sit amet</span><br/>
                  <span className="deals-span"><b className="deals-price">₹947/- </b><strike className="deals-strike"> ₹4,999</strike>(-81%)</span>
                  </div>
                  </Link>
           </div>
         </div>
         </Carousel>
     </div>
     <hr/>
     </>
   );
 }
}
export default DealsBlock;