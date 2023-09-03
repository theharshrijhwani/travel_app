import React from "react";
import "./Homepage.css"; // You may need to create a CSS file for styling
import Bgvideo from "../../assets/Video-bg.mp4";
function Homepage() {
  return (
    <div className="homepage">
      <video src={Bgvideo} autoPlay loop muted className="video-bg" />
      <div className="content">
        <h1>TripCraft</h1>
      </div>
      <div class="line-1">Embark Your Journey With us</div>
      <div className="Button">
        <button class="animated-button">
          <span>Join us</span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
