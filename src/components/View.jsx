import React, { useEffect, useState } from "react";
import "./View.css";
import Grid from "../assets/Grid.png";
import List from "../assets/List.png";

export default function View(props) {
  const views = ["Grid", "List"];
  const [selectedView, setSelectedView] = useState(views[0]);
  useEffect(()=>{
    props.setView(selectedView);
  }, [selectedView])
  return (
    <div
      className="View"
      onClick={() => {
        selectedView == "Grid"
          ? setSelectedView(views[1])
          : setSelectedView(views[0]);
      }}
    >
      <div className={selectedView == "Grid" ? "grid-selected" : "grid"}>
        <img src={Grid} alt="" />
        {selectedView == "Grid" && <span>Grid</span>}
      </div>
      <div className={selectedView == "List" ? "list-selected" : "list"}>
        <img src={List} alt="" />
        {selectedView == "List" && <span>List</span>}
      </div>
    </div>
  );
}
