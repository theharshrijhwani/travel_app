import React from "react";
import "./TimeLineItem.css";

const TimeLineItem = ({ day, date, activities, idx }) => {
  return (
    <div
      className={`itinerary-card ${
        idx % 2 == 0 ? "itinerary-card-left" : "itinerary-card-right"
      }`}
    >
      <div className="itinerary-card-wrapper">
        {idx % 2 == 1 && <div className="arrow-left"></div>}
        <h2>Day {day}</h2>
        <span>{date}</span>
        {activities.map((activity, index) => (
          <p key={index}>{activity[0]}</p>
        ))}
        {idx % 2 == 0 && <div className="arrow-right"></div>}
      </div>
      <div className="container">
        <div className="progress progress-striped">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineItem;
