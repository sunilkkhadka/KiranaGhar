import React, { Fragment, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";

import axios from "axios";
import Header from "../components/includes/Header";
import Categories from "../components/home/Categories";
import Footer from "../components/includes/Footer";

const AppRoute = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("http://127.0.0.1:8000/api/user/")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <Header user={user} setUser={setUser} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route
          exact
          path="/productCategory/:category_id"
          component={ProductCategoryPage}
        />
        <Route exact path="/product/:id" component={ProductPage} />
      </Switch>

      <Footer />
    </Fragment>
  );
};

export default AppRoute;
