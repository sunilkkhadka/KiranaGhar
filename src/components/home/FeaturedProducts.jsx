import React, { useEffect } from "react";

const FeaturedProducts = ({ productList }) => {
  const getProducts = productList.map((product, i) => {
    if (product.special_price !== null) {
      return (
        <div className="product-card-container">
          <div className="product-card">
            <a href={"/product/" + product.id}>
              <div className="product-img">
                <img src={product.image} alt={product.image} />
              </div>
            </a>
            <div className="product-title">
              <h3>{product.title}</h3>
            </div>
            <div className="product-price">
              <h4 className="product-special-price">
                Rs. {product.special_price}
              </h4>
              <h5>Rs. {product.price}</h5>
            </div>
            <div className="product-add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="product-card-container">
          <div className="product-card">
            <a href={"/product/" + product.id}>
              <div className="product-img">
                <img src={product.image} alt={product.image} />
              </div>
            </a>
            <div className="product-title">
              <h3>{product.title}</h3>
            </div>
            <div className="product-price">
              <h4>Rs. {product.price}</h4>
            </div>
            <div className="product-add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="home-featured-products">
      <div className="featured-heading">
        <h1>FEATURED PRODUCTS</h1>
        <h3>All the featured products are displayed here</h3>
      </div>
      <div className="product-list">{getProducts}</div>
    </div>
  );
};

export default FeaturedProducts;
