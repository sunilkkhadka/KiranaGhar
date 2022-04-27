import React from "react";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";
import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-page-container">
      {/* <Header /> */}
      <LoginForm />
      {/* <Footer /> */}
    </div>
  );
};

export default LoginPage;
