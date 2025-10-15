import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

class RakhiBlock extends React.Component {
 render() {
   return (
    <>
     <div className="section">
      <div className="rb-header container">
       <h1><b>Threads of Love: Rakhi Fashion</b></h1>
       <span><b>Make Your Bonds Stronger!!</b></span>
       </div>
       <Carousel autoPlay interval="5000" transitionTime="10000ms" infiniteLoop>
         <div>
         <div className="container cont" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/rakhi-1`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-1.jpg`)} alt="product-1" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Lorem</b></h4>
                  <span className="rb-span">Lorem ipsum dolor sit amet hfkoj</span><br/>
                  <span className="rb-span"><b className="rb-price">₹5,999/- </b><strike className="rb-strike"> ₹9,999</strike> (-40%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/rakhi-2`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-2.jpg`)} alt="product-2" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>dolore</b></h4>
                  <span className="rb-span">Lorem ipsum dolor sit amet</span><br/>
                  <span className="rb-span"><b className="rb-price">₹5,999/- </b><strike className="rb-strike"> ₹9,999</strike> (-40%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/rakhi-3`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-3.jpg`)} alt="product-3" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Lorem</b></h4>
                  <span className="rb-span">consectetur adipiscing el</span><br/>
                  <span className="rb-span"><b className="rb-price">₹3,999/- </b><strike className="rb-strike"> ₹6,999</strike> (-43%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/rakhi-4`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-4.jpg`)} alt="product-4" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Excepteur</b></h4>
                  <span className="rb-span">reprehenderit in voluptate kjfkl olejd</span><br/>
                  <span className="rb-span"><b className="rb-price">₹5,799/- </b><strike className="rb-strike"> ₹6,999</strike> (-17%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/rakhi-5`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-5.jpg`)} alt="product-5" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Duis aute</b></h4>
                  <span className="rb-span">aliquip ex ea commodo consequat</span><br/>
                  <span className="rb-span"><b className="rb-price">₹10,000/- </b><strike className="rb-strike"> ₹15,000</strike> (-33.33%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/rakhi-6`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Rakhi images/rb-6.jpg`)} alt="product-6" className="rb-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4><b>veniam</b></h4>
                  <span className="rb-span">culpa qui officia deserunt</span><br/>
                  <span className="rb-span"><b className="rb-price">₹3,600/- </b><strike className="rb-strike"> ₹5,150</strike> (-43%)</span>
                  </div>
                  </Link>
              </div>
           </div>
         </div>  
         <div className="container cont" style={{height:"400px"}}>
              <div className="row">
              <Link
                 to={`/product/rakhi-6`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-6.jpg`)} alt="product-7" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>veniam</b></h4>
                  <span className="rb-span">culpa qui officia deserunt</span><br/>
                  <span className="rb-span"><b className="rb-price">₹1,200/- </b><strike className="rb-strike"> ₹1,500</strike> (-20%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/rakhi-5`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-5.jpg`)} alt="product-8" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Duis aute</b></h4>
                  <span className="rb-span">aliquip ex ea commodo consequat</span><br/>
                  <span className="rb-span"><b className="rb-price">₹1,500/- </b><strike className="rb-strike"> ₹1,800</strike> (-16.66%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/rakhi-4`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-4.jpg`)} alt="product-9" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Excepteur</b></h4>
                  <span className="rb-span">reprehenderit in voluptate kjfkl olejd</span><br/>
                  <span className="rb-span"><b className="rb-price">₹1,500/- </b><strike className="rb-strike"> ₹2,500</strike> (-40%)</span>
                  </div>
                  </Link>

                <Link
                 to={`/product/rakhi-3`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-3.jpg`)} alt="product-10" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>Lorem</b></h4>
                  <span className="rb-span">consectetur adipiscing el</span><br/>
                  <span className="rb-span"><b className="rb-price">₹1,500/- </b><strike className="rb-strike"> ₹1,800</strike> (-16.66%)</span>
                  </div>
                  </Link>

                  <Link
                 to={`/product/rakhi-2`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-2.jpg`)} alt="product-11" className="rb-img"/><hr/>
                <div style={{textAlign:"match-parent"}}>
                  <h4><b>dolore</b></h4>
                  <span className="rb-span">Lorem ipsum dolor sit amet</span><br/>
                  <span className="rb-span"><b className="rb-price">₹479/- </b><strike className="rb-strike"> ₹999</strike> (-52%)</span>
                  </div>
                  </Link>
                <Link
                 to={`/product/rakhi-1`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Rakhi images/rb-1.jpg`)} alt="product-12" className="rb-img"/><hr/>
                <div style={{textAlign:"left !important"}}>
                  <h4><b>Lorem</b></h4>
                  <span className="rb-span">Lorem ipsum dolor sit amet hfkoj</span><br/>
                  <span className="rb-span"><b className="rb-price">₹335/- </b><strike className="rb-strike"> ₹1,999</strike>(-83%)</span>
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
export default RakhiBlock;