import React, { useState, useEffect } from "react";

const ProductCategoryMenu = ({ categoryData }) => {
  const renderCategory = () => {
    if (categoryData == undefined) {
      return null;
    } else {
      console.log(categoryData);
      let categories = categoryData.map((element, i) => {
        return (
          <div className="menu-list">
            <a href="#">
              <h2>{element.category_name}</h2>
            </a>
            <div className="sub-menu-list">
              {element.sub_categories.map((ele, i) => {
                return <a href="#">{ele.subcategory_name}</a>;
              })}
            </div>
          </div>
        );
      });
      return categories;
    }
  };

  return (
    <div className="product-category-menu">
      <div className="product-category-menu-list">{renderCategory()}</div>
    </div>
  );
};

export default ProductCategoryMenu;
