import React from "react";
import TimeLine from "../TimeLine/TimeLine";
import "./ItineraryLists.css";

const ItineraryLists = ({ itineraryData }) => {
  return (
    <>
      <div className="ItineraryLists">
        <TimeLine timelineData={itineraryData} />
      </div>
    </>
  );
};

export default ItineraryLists;
