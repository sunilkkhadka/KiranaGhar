import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Categories = ({ data }) => {
  const { category_id } = useParams();

  const renderCategory = () => {
    if (data === undefined) {
      return null;
    } else {
      let categoryOutput = data.map((element, i) => {
        // console.log(element.category_name)-

        // I was making this mistake
        // const sub = data.map((subcat) => {
        //   subcat.subcategories.map((subcategory, i) => {
        //     return <li key={i.toString()}>{subcategory.subcategory_name}</li>;
        //     // console.log(subcategory.subcategory_name);
        //   });
        //  data.subcategories.map((subcategory, i) => {
        //     return <li key={i.toString()}>{subcategory.subcategory_name}</li>;
        //     // console.log(subcategory.subcategory_name);
        //   });
        // });

        return (
          <a
            href={"/productCategory/" + element.category_id}
            className="mainCategory-links"
          >
            <li key={i.toString()}>
              {element.category_name} <FontAwesomeIcon icon={faChevronDown} />
              <ul className="subcategory-list">
                {element.subcategories.map((subcat, i) => {
                  return <li key={i.toString()}>{subcat.subcategory_name}</li>;
                })}
              </ul>
            </li>
          </a>
        );
      });

      return categoryOutput;
    }
  };

  return (
    <div className="header-categories">
      <ul className="main-category">{renderCategory()}</ul>
    </div>
  );
};

export default Categories;
