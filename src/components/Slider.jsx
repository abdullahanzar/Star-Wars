import React, { useContext, useEffect, useState } from "react";
import "./Slider.css";
import StarWarsContext from "../StarWarsContext";

export default function Slider() {
  const { slider, setSlider, category } = useContext(StarWarsContext);
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    const keys = Object.keys(slider[0]);
    setKeys(keys);
  }, [slider]);
  return (
    <div className="overlay" onClick={() => setSlider("")}>
      <div className="slider">
        <p className="slider_title">
          {capitalizeFirstLetter(category)} Details
        </p>
        <div className="divider"></div>
        <div className="slider_data">
          {keys.map((item, key) => {
            return (
              <div className="node" key={key}>
                <p>{capitalizeFirstLetter(item)}</p>
                <p className="data_style">{slider[0][item]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
