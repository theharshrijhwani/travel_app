import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./TravelMap.css";

const style = {
  height: "100%",
  width: "100%",
};
const TravelMap = ({ data }) => {
  const mapRef = useRef(null); // Ref to store the map instance

  useEffect(() => {
    if (!mapRef.current) {
      // Create a Leaflet map instance if it doesn't exist
      mapRef.current = L.map("leaflet-map").setView(
        [19.0821978, 72.7410984],
        13
      );

      // Add tile layer to the map
      // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //   attribution: "OpenStreetMap",
      // }).addTo(mapRef.current);
      L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }).addTo(mapRef.current);
    }

    // Loop through data to add markers and popups
    data.forEach((day) => {
      day.activities.forEach((activity) => {
        const [location, coordinates] = activity;
        L.marker(coordinates)
          .addTo(mapRef.current)
          .bindPopup(
            L.popup({
              maxWidth: 150,
              className: "popup",
            })
          )
          .setPopupContent(`${location} at Day ${day.day}`)
          .openPopup();
      });
    });
  }, [data]);

  return <div id="leaflet-map" style={style} />;
};

// const TravelMap = ({ itineraryData }) => {
//   return (
//     <div style={style}>
//       <MapContainer
//         center={[19.0821978, 72.7410984]}
//         zoom={10}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="OpenStreetMap"
//         />
//         {itineraryData.map((day) =>
//           day.activities.map((activity) => {
//             const [location, coordinates] = activity;
//             return (
//               <Marker key={location} position={coordinates}>
//                 <Popup>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       fontSize: "1.2rem",
//                       borderTop: "5px solid #00b690",
//                     }}
//                   >
//                     {location}
//                   </div>
//                 </Popup>
//               </Marker>
//             );
//           })
//         )}
//       </MapContainer>
//     </div>
//   );
// };

export default TravelMap;
