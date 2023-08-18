import React from "react";
import ItineraryLists from "../ItineraryLists/ItineraryLists";
import TravelMap from "../TravelMap/TravelMap";
import itineraryData from "../../data/data.json";
import "./Itinerary.css";

const Itinerary = () => {
  return (
    <div className="Itinerary">
      <ItineraryLists itineraryData={itineraryData} />
      <TravelMap data={itineraryData.days} />
    </div>
  );
};

export default Itinerary;
