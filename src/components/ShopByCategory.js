import React from "react";
import MainProductsUi from "./MainProductsUi";
import "./MainProducts.css";

function ShopByCategory() {
  return (
    <div>
        <div className="shopCategory_Heading">
            <h3>Shop By Category</h3>
        </div>
      <div className="MainProductsFunc_Cont">
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-11.png" />
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-10.png" />
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-22.png" />
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-16.png" />
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-17.png" />
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-19.png" />
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-07.png" />
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-13.png" />
        <MainProductsUi source="https://k.nooncdn.com/cms/pages/20210525/5e6536ce873b58ccd0cb4baf01ade972/en_mb-category-21.png" />
      </div>
    </div>
  );
}

export default ShopByCategory;

// export default ShopByCategory;
