import React from 'react';
import './MainProducts.css';

function MainProductsUi({source}) {
    return (
        <div className='productUI_Container'>
            <div className="productUI">
                <img src={source} width='90' height='110' alt="" />
            </div>
            
            
        </div>
    )
}

export default MainProductsUi;
