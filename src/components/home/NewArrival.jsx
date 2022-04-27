import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsListByRemark();
  }, []);

  const getProductsListByRemark = async () => {
    try {
      let response = await fetch(
        "http://127.0.0.1:8000/api/getProductListByRemarks/NEW"
      );
      let data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getNewProducts = products.map((product, i) => {
    console.log(product);
    if (product.special_price !== null) {
      return (
        <div className="product-card-container">
          <div className="new-product-card">
            <div className="new-product-img">
              <a href={"/product/" + product.id}>
                <img src={product.image} alt={product.image} />
              </a>
            </div>
            <div className="new-product-title">
              <h3>{product.title}</h3>
            </div>
            <div className="new-product-price">
              <h4 className="new-product-special-price">
                Rs. {product.special_price}
              </h4>
              <h5>Rs. {product.price}</h5>
            </div>
            <div className="new-product-add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="product-card-container">
          <div className="new-product-card">
            <div className="new-product-img">
              <a href={"/product/" + product.id}>
                <img src={product.image} alt={product.image} />
              </a>
            </div>
            <div className="new-product-title">
              <h3>{product.title}</h3>
            </div>
            <div className="new-product-price">
              <h4>Rs. {product.price}</h4>
            </div>
            <div className="new-product-add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="home-new-arrival">
      <div className="arrival-heading">
        <h1>NEW ARRIVAL</h1>
        <h3>All the latest products are displayed here</h3>
      </div>
      <div className="new-arrival-list">{getNewProducts}</div>
    </div>
  );
};

export default NewArrival;
