import React from "react";
import img from "../../asset/images/img.png";

const ProductImage = ({ productData }) => {
  const renderProductInfo = () => {
    if (productData == null) {
      return null;
    } else {
      console.log(productData);
      const product = productData.map((data, i) => {
        return <img key={i} src={data.image} alt="hello" />;
      });

      return product;
    }
  };

  return (
    <div className="product-image">
      <div className="image-container">{renderProductInfo()}</div>
    </div>
  );
};

export default ProductImage;
