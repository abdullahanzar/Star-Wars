import React, { useState } from "react";
import "./home.css";
import Header from "./Header.jsx";
import Dashboard from "./Dashboard.jsx";
import Sidebar from "./Sidebar.jsx";
import StarWarsContext from "../StarWarsContext.js";
import Slider from "./Slider.jsx";

export default function Home() {
  const [displayData, setDisplayData] = useState([]);
  const [category, setCategory] = useState("");
  const [slider, setSlider] = useState("");
  return (
    <StarWarsContext.Provider
      value={{ displayData, setDisplayData, category, setCategory, setSlider, slider }}
    >
      <div className="home">
        <Header />
        <div className="main">
          <Sidebar />
          <Dashboard />
          {slider && <Slider />}
        </div>
      </div>
    </StarWarsContext.Provider>
  );
}
