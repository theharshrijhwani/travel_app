import React, { useEffect } from "react";

import "./login.css";

import globe from "../../assets/logo.png";

const Login = () => {
  useEffect(() => {
    const signInButtton = document.getElementById("sign-in");
    const signUpButtton = document.getElementById("sign-up");

    const signInForm = document.getElementById("sign-in-form");
    const signUpForm = document.getElementById("sign-up-form");

    signInButtton.addEventListener("click", () => {
      signInButtton.classList.add("link-current");
      signUpButtton.classList.remove("link-current");
      signUpForm.classList.add("form-hide");
      signInForm.classList.remove("form-hide");
    });

    signUpButtton.addEventListener("click", () => {
      signInButtton.classList.remove("link-current");
      signUpButtton.classList.add("link-current");
      signInForm.classList.add("form-hide");
      signUpForm.classList.remove("form-hide");
    });
  });

  return (
    <div className="login-div">
      <div className="tagline">
        <img src={globe} width={60} height={60}></img>
        <header>TripCraft!</header>
      </div>
      <div className="login-form">
        <div className="sign-in-opts">
          <span id="sign-in" className="link link-current">
            Sign In
          </span>
          <span id="sign-up" className="link">
            Sign Up
          </span>
        </div>
        <div id="sign-in-form" className="sign-in-div">
          <form method="post" name="sign-in">
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button type="button">Sign In!</button>
          </form>
        </div>
        <div id="sign-up-form" className="sign-up-div form-hide">
          <form method="post" name="sign-in">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button type="button">Sign Up!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
