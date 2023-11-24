import React, { useContext } from "react";
import "./Categories.css";
import Folder from "../assets/Folder.png";
import ActionButton from "../assets/Action.png";
import CategoriesContext from "./CategoriesContext";

export default function Categories(props) {
  const {setSelected} = useContext(CategoriesContext);
  return (
    <div className="category" onClick={()=>setSelected(props.name.toLowerCase())}>
      <img src={Folder} alt="" />
      <p>{props.name}</p>
      <img src={ActionButton} alt="" />
    </div>
  );
}
