// src/Components/Homepage/Homepage.js
import React from "react";
import Spline3DScene from "../Spline3DScene";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to My Homepage</h1>
      <p>This is the content of my homepage.</p>
      {Spline3DScene}
      <Spline3DScene />
    </div>
  );
}

export default HomePage;
