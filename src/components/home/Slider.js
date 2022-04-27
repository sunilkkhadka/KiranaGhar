import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./Categories";
import img from "../../asset/images/img.png";

const Slider = () => {
  return (
    <div className="home-slider">
      <div className="slider">
        <img
          src="https://www.merokirana.com/archive/KiranaOffer/7931cbe20b0643d3bb0c12420b3e6bd5.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider;
