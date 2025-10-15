import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

class BrandsBlock extends React.Component {
 render() {
   return (
    <>
     <div className="secton">
      <div className="brand-header container">
       <h1><b>Prestige Picks</b></h1>
       <span><b>Explore the Pinnacle of Online Shopping!!</b></span>
       </div>
       <Carousel autoPlay interval="5000" transitionTime="10000ms" infiniteLoop>
         <div>
         <div className="container cont" style={{height:"325px"}}>
              <div className="row">
              <Link
                 to={`/product/brand-1`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Brands images/brand-1.jpg`)} alt="product-1" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-1-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Isabel Store</b></h4>
                  </div>
                  </Link>

                  <Link
                 to={`/product/brand-2`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Brands images/brand-2.jpg`)} alt="product-2" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-2-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>SaleFord Fashion</b></h4>
                  </div>
                  </Link>
                <Link
                 to={`/product/brand-3`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Brands images/brand-3.jpg`)} alt="product-3" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-3-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Chinki Sato</b></h4>
                  </div>
                  </Link>

                <Link
                 to={`/product/brand-4`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Brands images/brand-4.jpg`)} alt="product-4" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-1-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Isabel Store</b></h4>
                  </div>
                  </Link>

                  <Link
                 to={`/product/brand-5`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Brands images/brand-5.jpg`)} alt="product-5" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-2-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>SaleFord Fashion</b></h4>
                  </div>
                  </Link>

                <Link
                 to={`/product/brand-6`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",}}>
                <img src={require(`./Brands images/brand-6.jpg`)} alt="product-6" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-3-logo.png`)} alt=""/>
                <div style={{textAlign:"left !important"}}>
                  <h4 className="heading4"><b>Chinki Sato</b></h4>
                  </div>
                  </Link>
              </div>
           </div>
         </div>  
         <div className="container cont" style={{height:"325px"}}>
              <div className="row">
              <Link
                 to={`/product/brand-6`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Brands images/brand-6.jpg`)} alt="product-7" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-1-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Isabel Store</b></h4>
                  </div>
                  </Link>

                  <Link
                 to={`/product/brand-5`} className="col-md-2 col-lg-2 col-sm-3 col-4 " style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Brands images/brand-5.jpg`)} alt="product-8" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-2-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>SaleFord Fashion</b></h4>
                  </div>
                  </Link>
                <Link
                 to={`/product/brand-4`} className="col-md-2 col-lg-2 col-sm-3 col-4" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Brands images/brand-4.jpg`)} alt="product-9" className="deals-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-3-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Chinki Sato</b></h4>
                 </div>
                  </Link>

                <Link
                 to={`/product/brand-3`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Brands images/brand-3.jpg`)} alt="product-10" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-1-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>Isabel Store</b></h4>
                  </div>
                  </Link>

                  <Link
                 to={`/product/brand-2`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Brands images/brand-2.jpg`)} alt="product-11" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-2-logo.png`)} alt=""/>
                <div style={{textAlign:"match-parent"}}>
                  <h4 className="heading4"><b>SaleFord Fashion</b></h4>
                  </div>
                  </Link>

                <Link
                 to={`/product/brand-1`} className="col-md-2 col-lg-2 col-sm-3 col-4 hide" style={{ textDecoration: "none", color: "black",display:"flex !important"}}>
                <img src={require(`./Brands images/brand-1.jpg`)} alt="product-12" className="brands-img"/><hr/><img className="brands-logo" src={require(`./Brands images/brand-3-logo.png`)} alt=""/>
                <div style={{textAlign:"left !important"}}>
                  <h4 className="heading4"><b>Chinki Sato</b></h4>
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
export default BrandsBlock;