import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const Login = (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: password,
    };

    fetchLogin();
  };

  const fetchLogin = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    let data = await response.json();
    localStorage.setItem("TOKEN", data.token);
    setLoggedIn(true);
    console.log(data);
    // axios
    //   .post("http://127.0.0.1:8000/api/login/", loginData)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  if (loggedIn) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <div className="login">
        <div className="login-container">
          <form action="#" onSubmit={Login} encType="multipart-form/data">
            <h2>Login:</h2>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default LoginForm;
