import React, { useContext, useEffect, useState } from "react";
import "./dashboard.css";
import View from "./View";
import { films, placeholderAddress } from "../API";
import movieIcon from "../assets/movieIcon.png";
import optionsButton from "../assets/optionsButton.png";
import StarWarsContext from "../StarWarsContext";
import starWarsHome from "../assets/Star-Wars-Home.png";

export default function Dashboard(props) {
  const { displayData, category, setSlider, loader } =
    useContext(StarWarsContext);
  const [Placeholders, setPlaceholders] = useState("");
  const [view, setView] = useState("");
  useEffect(() => {
    (async () => {
      const placeholder = await placeholderAddress();
      setPlaceholders(placeholder);
    })();
  }, [displayData]);
  return (
    <div className="dashboard">
      {category && privateHeader(category, setView)}
      {category && (
        <div className="mainView">
          {view == "Grid" &&
            displayData != undefined &&
            displayData.map((item, key) =>
              fillGridContainers({ Placeholders, item, key, setSlider })
            )}
          {view == "List" &&
            displayData != undefined &&
            displayData.map((item, key) =>
              fillListContainers({ Placeholders, item, key, setSlider })
            )}
        </div>
      )}
      {!category && Welcome(starWarsHome)}
      {loader && (
        <div className="overlayDash">
          <span class="loader"></span>
        </div>
      )}
    </div>
  );
}

const privateHeader = (category, setView) => {
  return (
    <div className="privateHeader">
      <p>{category[0]?.toUpperCase() + category?.slice(1)}</p>
      <View setView={setView} />
    </div>
  );
};

const fillGridContainers = (props) => {
  return (
    <div
      className="filmContainer"
      key={props.key}
      onClick={() => props.setSlider([props.item, props.Placeholders])}
    >
      <img src={props.Placeholders} alt="" />
      <div className="text">
        <div className="name">
          <img src={movieIcon} alt="" />
          <p>{props.item?.title || props.item?.name}</p>
        </div>
        <img src={optionsButton} alt="" />
      </div>
    </div>
  );
};

const fillListContainers = (props) => {
  return (
    <div
      className="listView"
      key={props.key}
      onClick={() => props.setSlider([props.item, props.Placeholders])}
    >
      <div className="name">
        <img src={movieIcon} alt="" />
        <p>{props.item?.title || props.item?.name}</p>
      </div>
      <p>{props.item?.director}</p>
      <p>{props.item?.release_date}</p>
    </div>
  );
};

function Welcome(starWarsHome) {
  return (
    <div className="welcome">
      <img src={starWarsHome} alt="" />
      <p>Welcome to Star Wars Dashboard</p>
      <p>
        Star Wars is an American epic space opera multimedia franchise created
        by George Lucas, which began with the eponymous 1977 film and quickly
        became a worldwide pop culture phenomenon.
      </p>
    </div>
  );
}
