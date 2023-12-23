import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import Categories from "./Categories";
import CategoriesContext from "./CategoriesContext";
import {fetch} from "../API";
import StarWarsContext from "../StarWarsContext";

export default function Sidebar() {
  const [selected, setSelected] = useState("");
  const {displayData, setDisplayData, setCategory} = useContext(StarWarsContext);
  useEffect(()=>{
    fetchData(selected, setDisplayData);
    setCategory(selected);
  }, [selected]);
  return <div className="sidebar">
    <CategoriesContext.Provider value={{setSelected, selected}}>
    <Categories name="Films"/>
    <Categories name="People"/>
    <Categories name="Planets"/>
    <Categories name="Species"/>
    <Categories name="Starships"/>
    <Categories name="Vehicles"/>
    </CategoriesContext.Provider>
  </div>;
}


const fetchData = (selected, setData) => {
  (async ()=>{
    try {
      const data = await fetch(selected);
      setData(data);
    }
    catch(e) {
      console.log(e)
    }
  })()
}