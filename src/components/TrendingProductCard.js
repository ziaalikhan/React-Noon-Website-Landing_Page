import React from "react";
import './TrendingProductCard.css';
import ProductCardUI from "./ProductCardUI";



function TrendingProductCard() {
  return (
    <div className='product_cards'>
      <ProductCardUI image="https://z.nooncdn.com/products/tr:n-t_240/v1603870447/N41442670A_1.jpg"
      description='Vr Box multiple features'
      currency='AED'
      priceSpan='682'
      subprice='AED 720'
      subPriceSpan='3% Off'
      dateSpan='Tommorow, June 17'
      rating='⭐3.2'
      ratingdescSpan='(201)'
      />
          <ProductCardUI image="https://z.nooncdn.com/products/tr:n-t_240/v1618292510/N46487162A_1.jpg"
      description='ASUS Gen 10 Laptop'
      currency='AED'
      priceSpan='450'
      subprice='AED 490'
      subPriceSpan='5% Off'
      dateSpan='June 16'
      rating='⭐4.1'
      ratingdescSpan='(102)'
      />
        <ProductCardUI image="https://z.nooncdn.com/products/tr:n-t_240/v1611138575/N42284105A_1.jpg"
      description='Macbook pro 2019'
      currency='AED'
      priceSpan='1100'
      subprice='AED 1150'
      subPriceSpan='6% Off'
      dateSpan='June 16'
      rating='⭐3.0'
      ratingdescSpan='(67)'
      />
          <ProductCardUI image="https://z.nooncdn.com/products/tr:n-t_240/v1537004783/N17076595A_1.jpg"
      description='HpvCurve 43" LED'
      currency='AED'
      priceSpan='550'
      subprice='AED 580'
      subPriceSpan='4% Off'
      dateSpan='June 15'
      rating='⭐2.6'
      ratingdescSpan='(23)'
      />
        <ProductCardUI image="https://z.nooncdn.com/products/tr:n-t_240/v1615355292/N45047130A_1.jpg"
      description='Hp Gen 5 latest'
      currency='AED'
      priceSpan='420'
      subprice='AED 440'
      subPriceSpan='3% Off'
      dateSpan='June 13'
      rating='⭐2.3'
      ratingdescSpan='(87)'
      />
          <ProductCardUI image="https://z.nooncdn.com/products/tr:n-t_240/v1603273178/N41198624A_1.jpg"
      description='New Branded Watch'
      currency='AED'
      priceSpan='105'
      subprice='AED 115'
      subPriceSpan='5% Off'
      dateSpan='Tommorow, June 13'
      rating='⭐4.9'
      ratingdescSpan='(142)'
      />


      
     
    </div>
  );
}

export default TrendingProductCard;

// export default TrendingProductCard;
