import DiscountBlock from './discount';
import DealsBlock from './deals-block';
import BrandsBlock from './brands-block';
import TrendingBlock from './trend-block';
import RakhiBlock from './rakhi-block';



function Home() {
  return (
    <div className="home-bg">
       
      <DiscountBlock/>
      <DealsBlock/>
      <RakhiBlock/>
      <BrandsBlock/>
      <TrendingBlock/>
      </div>
  );
}

export default Home;