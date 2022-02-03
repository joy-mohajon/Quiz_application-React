import React from "react";
import loginImage from "../../assets/images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} text="login" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
