import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // e.preventDefault();
    // some fancy firebase login
  };

  const register = (e) => {
    e.preventDefault();
    // some fancy firebase register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt="logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            placeholder="Your Email Add"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your passcode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero omnis
          dicta excepturi, tempore consequatur earum repellendus recusandae
          voluptatum amet!
        </p>
        <button onClick={register} className="login_resisterButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
