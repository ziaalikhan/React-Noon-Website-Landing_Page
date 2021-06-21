import React from "react";
import './MainProducts.css';
import ProductCardUI from "./ProductCardUI";
import Iphone from '../images/iphone.jpg';
import airpods from '../images/airpods.jpg';
import airpodsPro from '../images/airpodsPro.jpg';
import lcd from '../images/lcd.jpg';
import playstation from '../images/playstation.jpg';
import smartWatch from '../images/smartWatch.jpg';

function ProductCardFunc() {
  return (
    <div className='product_cards'>
      <ProductCardUI image={Iphone}
      description='Apple Iphone 12 Pro Max'
      currency='AED'
      priceSpan='4682'
      subprice='AED 5120'
      subPriceSpan='8% Off'
      dateSpan='Tommorow, June 13'
      rating='⭐4.8'
      ratingdescSpan='(365)'
      />
          <ProductCardUI image={airpods}
      description='Apple Airpods with stand'
      currency='AED'
      priceSpan='450'
      subprice='AED 550'
      subPriceSpan='5% Off'
      dateSpan='June 15'
      rating='⭐4.9'
      ratingdescSpan='(456)'
      />
        <ProductCardUI image={airpodsPro}
      description='Xiomi Airpods'
      currency='AED'
      priceSpan='380'
      subprice='AED 420'
      subPriceSpan='6% Off'
      dateSpan='Tommorow, June 13'
      rating='⭐4.8'
      ratingdescSpan='(243)'
      />
          <ProductCardUI image={lcd}
      description='Samsung 43" LED'
      currency='AED'
      priceSpan='550'
      subprice='AED 630'
      subPriceSpan='10% Off'
      dateSpan='Yesturday, June 12'
      rating='⭐4.8'
      ratingdescSpan='(110)'
      />
        <ProductCardUI image={playstation}
      description='Plastation 5 latest'
      currency='AED'
      priceSpan='720'
      subprice='AED 780'
      subPriceSpan='8% Off'
      dateSpan='Tommorow, June 13'
      rating='⭐4.8'
      ratingdescSpan='(365)'
      />
          <ProductCardUI image={smartWatch}
      description='Apple Smart Watch'
      currency='AED'
      priceSpan='310'
      subprice='AED 360'
      subPriceSpan='5% Off'
      dateSpan='Tommorow, June 13'
      rating='⭐4.8'
      ratingdescSpan='(142)'
      />
      
     
    </div>
  );
}

export default ProductCardFunc;
