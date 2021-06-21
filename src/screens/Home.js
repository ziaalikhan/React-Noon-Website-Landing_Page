import React from 'react'
import Navbar from '../components/Navbar';
import Nav from '../components/Nav';
import Slider from '../assets/Slider';
import MainProdutsFunc from '../components/MainProdutsFunc';
import ProductHeading from '../components/ProductHeading';
import ProductCardFunc from '../components/ProductCardFunc';
import ProductBanner from '../components/ProductBanner';
import MegaDeals from '../components/MegaDeals';
import TrendingDealsHeading from '../components/TrendingDealsHeading';
import TrendingProductCard from '../components/TrendingProductCard';
import TrendingBanner from '../components/TrendingBanner';
import ExclusiveDeals from '../components/ExclusiveDeals';
import TopPicks from '../components/TopPicks';
import TopPIckProducts from '../components/TopPIckProducts';
import Bannerfoot from '../components/Bannerfoot';
import ShopByCategory from '../components/ShopByCategory';
import DeleveryBanner from '../components/DeleveryBanner';
import SubCard1 from '../components/SubCard1';
import TopPicks1 from '../components/TopPicks1';
import HomeKitchenProducts from '../components/HomeKitchenProducts';
import SubCard2 from '../components/SubCard2';
import MobileandTablets from '../components/MobileandTablets';
import Subfooter1 from '../components/Subfooter1';
 import SubFooter2 from '../components/SubFooter2';
import SocialFooter from '../components/SocialFooter';
import Footer from '../components/Footer';



function Home() {
    return (
        <div>
           <Navbar />
            <Nav />
            <Slider />
            <MainProdutsFunc />
            <ProductHeading />
           <ProductCardFunc />
           <ProductBanner />
           <MegaDeals />
           <TrendingDealsHeading />
           <TrendingProductCard />
           <TrendingBanner />
           <ExclusiveDeals />
           <TopPicks />
           <TopPIckProducts />
           <Bannerfoot />
           <ShopByCategory />
           <DeleveryBanner />
           <SubCard1 />
           <TopPicks1 />
           <HomeKitchenProducts />
           <SubCard2 />
           <MobileandTablets />
           <Subfooter1 />
           < SubFooter2 />
           <SocialFooter />
           <Footer />
            
        </div>
    )
}

export default Home;
