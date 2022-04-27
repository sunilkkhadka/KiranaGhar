import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const Register = (e) => {
    e.preventDefault();

    fetchRegister();
  };

  const fetchRegister = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      }),
    });

    let data = await response.json();
    localStorage.setItem("TOKEN", data.token);
    setLoggedIn(true);
    console.log(data);
  };

  if (loggedIn) {
    return <Redirect to={"/"} />;
  } else {
    return (
      <div className="register">
        <div className="register-container">
          <form action="#" onSubmit={Register}>
            <h2>Register:</h2>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name="username"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
            </div>
            <div>
              <label htmlFor="re-password">Re-Password:</label>
              <input
                onChange={(e) => {
                  setPassword_confirmation(e.target.value);
                }}
                type="password"
                name="password_confirmation"
                placeholder="Re-enter your Password"
              />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default RegisterForm;
