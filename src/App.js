import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("TOKEN");

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
