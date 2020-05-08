import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./sign-up-page.styles.scss";

function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      console.log("Error inputs empty");
    } else {
      const user = {
        email,
        username,
        password,
        confirmPassword,
      };
      // axios.post("/post", { user });
      props.history.push("/");
    }
  };

  return (
    <div id="sign-up-page-container">
      <form action="/signup" method="post" onSubmit={handleSubmit}>
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
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          fullWidth
          margin="normal"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUpPage;
