import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/includes/Header";
import ProductImage from "../components/Product/ProductImage";
import ProductActions from "../components/Product/ProductActions";
import ProductDetails from "../components/Product/ProductDetails";
import ProductSuggest from "../components/Product/ProductSuggest";

const ProductPage = () => {
  const { id } = useParams();

  useEffect(() => {
    getProductData();
  }, []);

  const [product, setProduct] = useState([]);
  const [subcat, setSubcat] = useState();

  const getProductData = async () => {
    let response = await fetch(
      "http://127.0.0.1:8000/api/getProductsById/" + id
    );
    let data = await response.json();
    setProduct(data);
    console.log(data[0]["subcategory_id"]);
    setSubcat(data[0]["subcategory_id"]);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="product-top">
        <ProductImage productData={product} />
        <ProductActions productData={product} />
      </div>
      <div className="product-mid">
        <ProductDetails productData={product} />
      </div>
      <div className="product-bottom">
        <ProductSuggest subcategory={subcat} />
      </div>
    </div>
  );
};

export default ProductPage;
