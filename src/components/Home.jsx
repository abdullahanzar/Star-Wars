import React, { useState } from "react";
import "./home.css";
import Header from "./Header.jsx";
import Dashboard from "./Dashboard.jsx";
import Sidebar from "./Sidebar.jsx";
import StarWarsContext from "../StarWarsContext.js";

export default function Home() {
    const [displayData, setDisplayData] = useState({});
  return (
    <StarWarsContext.Provider value={{displayData, setDisplayData}}>
    <div className="home">
      <Header />
      <div className="main">
        <Sidebar />
        <Dashboard name="Films"/>
      </div>
    </div>
    </StarWarsContext.Provider>
  );
}
