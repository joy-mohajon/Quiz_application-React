import React from "react";
import loginImage from "../../assets/images/login.svg";
import classes from "../../Styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage} text="login" />
        <Form className={classes.login}>
          <TextInput
            icon="alternate_email"
            type="text"
            placeholder="Enter email"
          />

          <TextInput icon="lock" type="password" placeholder="Enter password" />

          <Button>
            <span>Submit now</span>
          </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
