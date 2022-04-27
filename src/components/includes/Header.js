import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faArrowRightToBracket,
  faUserPlus,
  faUserAstronaut,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

import Categories from "../home/Categories";

const Header = ({ user }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    categoriesList();
  }, []);

  const SearchHandler = (e) => {
    if (e.target.value === "") {
      setSearchData("");
    } else {
      setSearchKey(e.target.value);
      fetchSearchData(searchKey);
    }
  };

  const fetchSearchData = async (searchKey) => {
    let response = await fetch("http://127.0.0.1:8000/api/search/" + searchKey);
    let data = await response.json();
    setSearchData(data);
    // console.log(data);
  };

  const renderSearchData = () => {
    if (searchData === "") {
      return null;
    } else {
      const searchOutput = searchData.map((sd, i) => {
        console.log(sd);
        return (
          <div key={i.toString()} className="search-output">
            <a href={"/product/" + sd.id}>{sd.title}</a>
          </div>
        );
      });

      return searchOutput;
    }
  };

  const logout = () => {
    localStorage.clear();
  };

  const categoriesList = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/getAllCategories");
      let jsonData = await response.json();
      console.log(jsonData);
      setCategory(jsonData);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(searchData);

  if (localStorage.getItem("TOKEN")) {
    return (
      <div className="header">
        <div className="wrapper">
          <div className="header-logo">
            <a href="/" className="logo-icon">
              <FontAwesomeIcon
                className="kirana-icon"
                icon={faBasketShopping}
              />
              <h3>Kirana</h3>
            </a>
          </div>
          <div className="header-search-bar">
            <input
              onChange={SearchHandler}
              type="text"
              placeholder="Search in Kirana..."
            />
            <div className="header-search-output">
              {searchKey === "" ? null : renderSearchData()}
            </div>
          </div>
          <div className="header-cart">
            <a href="/cart">
              <FontAwesomeIcon icon={faCartArrowDown} />
              Your cart
            </a>
          </div>
          <div className="header-user">
            <h2>
              <FontAwesomeIcon icon={faUserAstronaut} />
              {user.name}
            </h2>
            <a href="/" onClick={logout}>
              LOGOUT
            </a>
          </div>
        </div>
        <Categories data={category} />
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="wrapper">
          <div className="header-logo">
            <a href="/" className="logo-icon">
              <FontAwesomeIcon
                className="kirana-icon"
                icon={faBasketShopping}
              />
              <h3>Kirana</h3>
            </a>
          </div>
          <div className="header-search-bar">
            <input
              onChange={SearchHandler}
              type="text"
              placeholder="Search in Kirana..."
            />
            <div className="header-search-output">
              {searchKey === "" ? null : renderSearchData()}
            </div>
          </div>
          <div className="header-cart">
            <a href="/cart">
              <FontAwesomeIcon icon={faCartArrowDown} />
              Your cart
            </a>
          </div>
          <div className="header-user">
            <a href="/login">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              Login
            </a>
            <a href="/register">
              <FontAwesomeIcon icon={faUserPlus} />
              Register
            </a>
          </div>
        </div>
        <Categories data={category} />
      </div>
    );
  }
};

export default Header;
