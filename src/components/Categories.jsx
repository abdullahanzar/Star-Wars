import React, { useContext } from "react";
import "./Categories.css";
import Folder from "../assets/Folder.png";
import ActionButton from "../assets/Action.png";
import CategoriesContext from "./CategoriesContext";
import StarWarsContext from "../StarWarsContext";

export default function Categories(props) {
  const {setSelected, selected} = useContext(CategoriesContext);
  const {category} = useContext(StarWarsContext);
  return (
    <div className={props.name.toLowerCase()==selected ? "category category-selected" : "category"} onClick={()=>setSelected(props.name.toLowerCase())}>
      <img src={Folder} alt="" />
      <p>{props.name}</p>
      <img src={ActionButton} alt="" />
    </div>
  );
}
