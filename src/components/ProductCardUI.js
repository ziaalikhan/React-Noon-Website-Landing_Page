import React from 'react';
import './MainProducts.css';

function ProductCardUI({image,description,currency,priceSpan,subprice,subPriceSpan,dateSpan,rating,ratingdescSpan}) {
    return (
        <div>
            

            <div className="cards">
                <img src={image} height='220' alt="" />
                <div className="description">
                    <h5 className='desc'>{description}</h5>
                    <h5 className="price">
                        {currency} <span className='priceSpan'>{priceSpan}</span>
                    </h5>
                    <h5 className='subPrice'>
                        <del>{subprice}</del> <span className='subPriceSpan'>{subPriceSpan}</span>
                    </h5>
                    <h5 className='arivesDate'>
                        Arrives <span className='dateSpan'>{dateSpan}</span>
                    </h5>
                    <div className="ratings">
                        <h5 className='expressRating'>express</h5>
                        <div className="ratingdesc">
                        <h5>{rating} <span className='ratingdescSpan'>{ratingdescSpan}</span></h5>
                        

                        </div>
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default ProductCardUI;
