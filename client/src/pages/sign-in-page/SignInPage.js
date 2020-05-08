import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./sign-in-page.styles.scss";

function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      console.log("Error inputs empty");
    } else {
      const user = {
        email,
        password,
      };
      // axios.post("/post", { user });
      props.history.push("/");
    }
  };

  return (
    <div id="sign-in-page-container">
      <form action="/signin" method="post" onSubmit={handleSubmit}>
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
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignInPage;
