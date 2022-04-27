import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/includes/Header";
import ProductCategoryMenu from "../components/ProductCategory/ProductCategoryMenu";
import ProductCategoryItem from "../components/ProductCategory/ProductCategoryItem";

const ProductCategoryPage = () => {
  const { category_id } = useParams();

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getCategoryById();
    getProductByCategory();
  }, []);

  const getCategoryById = async () => {
    let response = await fetch(
      "http://127.0.0.1:8000/api/getCategoriesById/" + category_id
    );
    let data = await response.json();
    setCategory(data);
  };

  const getProductByCategory = async () => {
    let response = await fetch(
      "http://127.0.0.1:8000/api/getProductsByCategory/" + category_id
    );
    let data = await response.json();
    setProduct(data);
  };

  return (
    <div className="product-category-page">
      {/* <Header /> */}
      <div className="product-category-page-items">
        <ProductCategoryMenu categoryData={category} />
        <ProductCategoryItem productData={product} />
      </div>
    </div>
  );
};

export default ProductCategoryPage;
