import React from "react";

const ProductDetails = ({ productData }) => {
  const renderProductDescription = () => {
    if (productData == null) {
      return null;
    } else {
      console.log(productData);
      const productDetail = productData.map((data, i) => {
        if (data.descrition === "") {
          return null;
        } else {
          return (
            <h3 key={i.toString()} className="product-info-data">
              {data.description}
            </h3>
          );
        }
      });

      return productDetail;
    }
  };

  return (
    <div className="product-details">
      <h3>Product Specification:</h3>
      <div className="product-detail-data">{renderProductDescription()}</div>
    </div>
  );
};

export default ProductDetails;
