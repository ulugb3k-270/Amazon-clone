/** @format */

import React, { useState } from "react";
import "./css/Login.css";
import db from "../firebase/config";
import { auth } from "../firebase/config";
import { Button, Input, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();
  let history = useHistory()

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            email: auth?.email,
          },
        })
      )
      .then(history.push("/"))
      .catch((error) => alert(error));
  };
  return (
    <div className="Login">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
        alt="logo"
      />
      <form action="" className="login__box">
        <h2>Sign in</h2>

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
        />

        <TextField
          id="outlined-adornment-password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
        />

        <Button onClick={signIn} type="submit">
          Sign in
        </Button>
      </form>

      <p>New to Amazon ?</p>
      <Link to="/reg">
        <Button>Create your Amazon account</Button>
      </Link>
    </div>
  );
}
