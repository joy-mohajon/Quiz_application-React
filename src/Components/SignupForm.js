import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswod, setConfirmPasswod] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const { Signup } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();

    //validation
    if (password !== confirmPasswod) {
      return setError("password don't match");
    }

    try {
      setError("");
      setLoading(true);
      await Signup(email, password, username);
      navigate("/Login");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={submitHandler}>
      <TextInput
        required
        icon="person"
        type="text"
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextInput
        required
        icon="alternate_email"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        required
        icon="lock"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        required
        icon="lock_clock"
        type="password"
        placeholder="Confirm password"
        value={confirmPasswod}
        onChange={(e) => setConfirmPasswod(e.target.value)}
      />

      <Checkbox
        required
        type="checkbox"
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button type="submit">
        <span>Submit now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div disabled={loading} className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
