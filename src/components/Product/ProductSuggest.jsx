import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductSuggest = ({ subcategory }) => {
  // console.log(suggested);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    let fetchSuggestedData = setTimeout(() => {
      fetch("http://127.0.0.1:8000/api/suggest/" + subcategory)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((ree) => console.log(ree));
      if (product !== null) {
        clearTimeout(fetchSuggestedData);
      }
    }, 3000);
  });

  const renderSuggestions = () => {
    const suggestedData = product.map((ele, i) => {
      return (
        <div className="product-card-container">
          <div className="product-card">
            <a href={"/product/" + ele.id}>
              <div className="product-img">
                <img src={ele.image} alt={ele.image} />
              </div>
            </a>
            <div className="product-title">
              <h3>{ele.title}</h3>
            </div>
            <div className="product-price">
              <h4 className="product-special-price">Rs. {ele.special_price}</h4>
              <h5>Rs. {ele.price}</h5>
            </div>
            <div className="product-add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
    return suggestedData;
  };

  return (
    <div className="home-featured-products">
      <div className="featured-heading">
        <h1>You May Also Like</h1>
        <h3>Products similar to your taste will be displayed here</h3>
      </div>
      <div className="product-list">{renderSuggestions()}</div>
    </div>
  );
};

export default ProductSuggest;
