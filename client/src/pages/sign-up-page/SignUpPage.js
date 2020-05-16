import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./sign-up-page.styles.scss";

function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || username === "" || password === "") {
      console.log("Error inputs empty");
    } else {
      axios
        .post("/signup", {
          email: email,
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      props.history.push("/");
    }
  };

  return (
    <div id="sign-up-page-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up to Twitter</h1>
        <TextField
          id="outlined-basic"
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          fullWidth
          margin="normal"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUpPage;
