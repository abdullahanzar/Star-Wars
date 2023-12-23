import React, { useContext, useEffect, useState } from "react";
import "./Slider.css";
import StarWarsContext from "../StarWarsContext";

export default function Slider() {
  const { slider, setSlider } = useContext(StarWarsContext);
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    console.log(slider)
    const keys = Object.keys(slider[0]);
    setKeys(keys);
  }, [slider]);
  return (
    <div className="overlay" onClick={() => setSlider("")}>
      <div className="slider">
        <p>Details</p>
        {keys.includes("title") && (
          <div className="image">
            <p>Image</p>
            <img src={slider[1]} alt="" />
          </div>
        )}
        {(keys.includes("name") || keys.includes("title")) && <div className="title">
          <p>Title</p>
          <p>{slider[0].title || slider[0].name}</p>
        </div>}
        <div className="genre">
          <p>{keys[1]}</p>
          <p>{slider["rotation_period"]}</p>
        </div>
        <div>
          {
            keys.map((item)=>{
              return (
                <p>{item} : {slider[0][item]}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
