import React from "react";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";
import RegisterForm from "../components/Login/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="login-page-container">
      {/* <Header /> */}
      <RegisterForm />
      {/* <Footer /> */}
    </div>
  );
};

export default RegisterPage;
