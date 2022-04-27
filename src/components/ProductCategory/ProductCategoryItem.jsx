import React from "react";

const ProductCategoryItem = ({ productData }) => {
  console.log(productData);
  const getProducts = productData.map((product, i) => {
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
    <div className="product-category-item">
      <div className="product-list">{getProducts}</div>
    </div>
  );
};

export default ProductCategoryItem;
