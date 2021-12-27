import "./css/Login.css";
import "./css/Reg.css";
import React, { useState } from "react";
import "./css/Login.css";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase/config";
import { Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { actionTypes } from "../reducer";

export default function Reg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory()

  const reg = (e) => {
    e.preventDefault();
    

    if (cpassword === password && cpassword && password) {
        history.push("/")
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => dispatch({
            type: actionTypes.SET_USER,
            user:{
                email: auth?.email
            }
        }))
        .catch((error) => alert(error))
    } else {    
      //   smth later
    }
  };
  return (
    <div>
      <div className="Login Reg">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="logo"
        />
        <form action="" className="login__box">
          <h2>Create an Account</h2>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
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
          <TextField
            id="outlined-adornment-password"
            label="Re-enter password"
            variant="outlined"
            type="password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            size="small"
          />

          <Button onClick={reg} type="submit">
            Continue
          </Button>
        </form>

        <p>Already Registrated?</p>

        <Link to="/log">
          <Button>Sign in</Button>
        </Link>
      </div>
    </div>
  );
}
