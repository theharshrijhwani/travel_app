import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Homepage/Homepage.css";
import Homepage from "./components/Homepage/Homepage";

function Main() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
