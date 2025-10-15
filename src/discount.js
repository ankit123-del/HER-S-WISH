import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
class DiscountBlock extends React. Component {
 render() {
  const containerStyle = {
    paddingTop: "120px",
    paddingLeft: "150px",
    paddingRight: "150px",
  };

  // Media query styles for screens with a max-width of 375px
  const smallScreenStyle = {
    paddingTop: "75px",
    paddingLeft: "25px",
    paddingRight: "25px",
  };

  // Check the screen width and conditionally apply styles
  if (window.innerWidth <= 767) {
    Object.assign(containerStyle, smallScreenStyle);
  }
   return (
    <>
     <div className="container" style={containerStyle}>
        <div style={{padding:"20px",backgroundColor:"#d4d5d5"}}>
       <Carousel autoPlay interval="5000" transitionTime="3000" infiniteLoop showThumbs={false}>
         <div>
           <img src={require(`./Discount images/offer-1.jpg`)} alt=""/>
         </div>
         <div>
           <img
             src={require(`./Discount images/offer-2.jpg`)}alt=""/>
         </div>
         <div>
           <img
             src={require(`./Discount images/offer-3.jpg`)}alt=""/>
         </div>
       </Carousel>
       </div>
     </div>
     <hr/>
     </>
   );
 }
}
export default DiscountBlock;
