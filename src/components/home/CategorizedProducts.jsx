import React, { useEffect, useState } from "react";
import axios from "axios";

const CategorizedProducts = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/getAllCategories");
      let jsonData = await response.json();
      console.log(jsonData);
      setCategory(jsonData);
    } catch (e) {
      console.error(e);
    }
  };

  const retrieveCategories = () => {
    if (category == undefined) {
      return null;
    } else {
      let categories = category.map((element, i) => {
        return (
          <a
            key={i.toString()}
            href={"/productCategory/" + element.category_id}
            className="categorized-product"
          >
            <div className="category-card">
              <div className="category-img">
                <img
                  src={element.category_image}
                  alt={element.category_image}
                />
              </div>
              <div className="category-title">{element.category_name}</div>
            </div>
          </a>
        );
      });
      return categories;
    }
  };

  return (
    <div className="home-categorized-products">
      <div className="categorized-heading">
        <h1>CATEGORIZED PRODUCTS</h1>
        <h3>All the categorized products are displayed here</h3>
      </div>
      <div className="categorized-products-blocks">{retrieveCategories()}</div>
    </div>
  );
};

export default CategorizedProducts;
