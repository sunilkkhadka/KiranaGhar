import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import AppURL from "../api/AppURL";
import Header from "../components/includes/Header";
import Slider from "../components/home/Slider";
import FeaturedProducts from "../components/home/FeaturedProducts";
import CategorizedProducts from "../components/home/CategorizedProducts";
import NewArrival from "../components/home/NewArrival";
import Categories from "../components/home/Categories";
import Footer from "../components/includes/Footer";

const HomePage = () => {
  // Getting visiting data and with each render, requesting the epi
  // useEffect(() => {
  //   // getVisitorDetails();
  // }, []);

  // const getVisitorDetails = () => {
  //   axios.get(`http://127.0.0.1:8000/api/getvisitor`).then().catch();
  // };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductsListByRemark();
  }, []);

  const getProductsListByRemark = async () => {
    try {
      let response = await fetch(
        "http://127.0.0.1:8000/api/getProductListByRemarks/FEATURED"
      );
      let data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      {/* <Header /> */}
      <div className="slider-category">
        <Slider />
      </div>
      <FeaturedProducts productList={product} />
      <CategorizedProducts />
      <NewArrival />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default HomePage;
