import React, { useEffect, useState } from "react";

const ProductActions = ({ productData }) => {
  const [quantity, setQuantity] = useState(1);

  const renderProductInfo = () => {
    if (productData == null) {
      return null;
    } else {
      console.log(productData);
      const product = productData.map((data, i) => {
        if (data.quantity === 0) {
          return (
            <div key={i.toString()} className="product-info-data">
              <div className="product-basic-info">
                <h2>{data.title}</h2>
                <h4>Brand: {data.brand}</h4>
                <h4>Rating: {data.rating}</h4>
              </div>
              <div className="product-info-action">
                <h3>PRODUCT CODE: {data.product_code}</h3>
                <h3>Availability: {"OUT OF STOCK"} </h3>
              </div>
            </div>
          );
        } else {
          return (
            <div key={i.toString()} className="product-info-data">
              <div className="product-basic-info">
                <h2>{data.title}</h2>
                <h4>Brand: {data.brand}</h4>
                <h4>Rating: {data.rating}</h4>
              </div>
              <div className="product-info-action">
                <h3>PRODUCT CODE: {data.product_code}</h3>
                <div className="quantity-actions">
                  <h3>Quantity: </h3>
                  <button
                    onClick={() => {
                      setQuantity(quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <h2>{quantity}</h2>
                  <button
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="product-price-add-cart">
                <div className="product-price">
                  <h2>Price: {data.special_price}</h2>
                  <h4>{data.price}</h4>
                </div>
                <div className="add-to-cart">
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          );
        }
      });

      return product;
    }
  };

  return (
    <div>
      <div className="product-info">
        {renderProductInfo()}
        <div className="products-detail-right">
          <ul>
            <li>
              <i class="flaticon-guarantee"></i> <strong>100% ORIGINAL</strong>{" "}
              guarantee for all products at kiranaGhar.com
            </li>
            <li>
              <i class="flaticon-exchange"></i> <strong> 7 Days Returns</strong>
              Change of mind is not applicable
            </li>
            <li>
              <i class="flaticon-free-delivery"></i>{" "}
              <strong>Get free delivery</strong> for every order above NPR 4900
            </li>
            <li>
              <i class="flaticon-shield"></i> <strong>Secure Shopping</strong>{" "}
              We are committed to protecting the security of your information
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
