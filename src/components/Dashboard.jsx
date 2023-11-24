import React, { useContext, useEffect, useState } from "react";
import "./dashboard.css";
import View from "./View";
import { films, placeholderAddress } from "../API";
import movieIcon from "../assets/movieIcon.png";
import optionsButton from "../assets/optionsButton.png";
import StarWarsContext from "../StarWarsContext";

export default function Dashboard(props) {
  const {displayData, setDisplayData} = useContext(StarWarsContext);
  const [Films, setFilms] = useState([]);
  const [Placeholders, setPlaceholders] = useState("");
  const [view, setView] = useState(""); 
  useEffect(() => {
    (async () => {
      try {
        const filmData = await films();
        setFilms(filmData);
        const placeholder = await placeholderAddress();
        setPlaceholders(placeholder);
      } catch (e) {
        console.log(e);
        setFilms("Errors");
      }
    })();
  }, []);
  useEffect(() => {
    console.log(view);
  }, [view]);
  return (
    <div className="dashboard">
      {privateHeader(props, setView)}
      <div className="mainView">
        {(view=="Grid") && Films.map((item, key) => fillGridContainers({ Placeholders, item, key }))}
      </div>
    </div>
  );
}

const privateHeader = (props, setView) => {
  return (
    <div className="privateHeader">
      <p>{props.name}</p>
      <View setView={setView}/>
    </div>
  );
};

const fillGridContainers = (props) => {
  return (
    <div className="filmContainer" key = {props.key}>
      <img src={props.Placeholders} alt="" />
      <div className="text">
        <div className="name">
          <img src={movieIcon} alt="" />
          <p>{props.item.title}</p>
        </div>
        <img src={optionsButton} alt="" />
      </div>
    </div>
  );
};
