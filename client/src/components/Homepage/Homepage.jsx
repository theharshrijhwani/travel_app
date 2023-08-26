import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="background-iframe">
        <iframe
          title="Background"
          src="https://my.spline.design/untitled-56585c9684016c029caf53834f134d41/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="content">
        <h1>Embark On a Journey With Us</h1>
        <button className="join-button">Join Us</button>
      </div>
    </div>
  );
}

export default Homepage;
