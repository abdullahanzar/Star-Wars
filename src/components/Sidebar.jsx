import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import Categories from "./Categories";
import CategoriesContext from "./CategoriesContext";
import {fetch} from "../API";
import StarWarsContext from "../StarWarsContext";

export default function Sidebar() {
  const [selected, setSelected] = useState("");
  const {displayData, setDisplayData, setCategory, setLoader} = useContext(StarWarsContext);
  useEffect(()=>{
    fetchData(selected, setDisplayData, setLoader);
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


const fetchData = (selected, setData, setLoader) => {
  (async ()=>{
    try {
      setLoader(true);
      const data = await fetch(selected);
      setData(data);
      setLoader(false);
    }
    catch(e) {
      console.log(e)
    }
  })()
}