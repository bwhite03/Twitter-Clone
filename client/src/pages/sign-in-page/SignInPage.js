import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./sign-in-page.styles.scss";

function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      console.log("Error inputs empty");
    } else {
      axios
        .post("/signin", {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem("auth-token", response.data);
          history.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div id="sign-in-page-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign In to Twitter</h1>
        <TextField
          id="outlined-basic"
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Sign In
        </Button>
        <div className="links">
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
