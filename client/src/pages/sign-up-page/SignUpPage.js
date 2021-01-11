import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./sign-up-page.styles.scss";

function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || username === "" || password === "") {
      setErrorMsg("Error inputs empty");
    } else {
      axios
        .post("/signup", {
          email: email,
          username: username,
          password: password,
        })
        .then(function (response) {
          props.history.push("/");
          console.log(response);
        })
        .catch(function (error) {
          setErrorMsg(error.response.data);
        });
    }
  };

  console.log(errorMsg);

  return (
    <div id="sign-up-page-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up to Twitter</h1>
        <TextField
          error={errorMsg}
          id="outlined-basic"
          label="Email"
          fullWidth
          margin="normal"
          helperText={errorMsg}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          error={errorMsg}
          id="outlined-basic"
          label="Username"
          fullWidth
          margin="normal"
          helperText={errorMsg}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          error={errorMsg}
          id="outlined-basic"
          label="Password"
          fullWidth
          margin="normal"
          helperText={errorMsg}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Sign Up
        </Button>
        <div className="links">
          <Link to="/signin">Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
