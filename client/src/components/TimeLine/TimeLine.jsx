import React from "react";
import TimelineItem from "../TimeLineItem/TimeLineItem";
import "./TimeLine.css";

const TimeLine = ({ timelineData }) => {
  console.log(timelineData);
  return (
    <>
      <h1>Timeline</h1>
      <div className="timeline-container">
        {timelineData.days.map((data, idx) => (
          <TimelineItem
            idx={idx}
            day={data.day}
            date={data.date}
            activities={data.activities}
            key={idx}
          />
        ))}
      </div>
    </>
  );
};
export default TimeLine;
