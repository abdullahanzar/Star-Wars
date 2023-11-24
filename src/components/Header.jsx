import React from "react";
import StarWarsIcon from "../assets/Star-Wars.png";
import './header.css'

export default function Header() {
  return (
    <div className="Header">
      <div className="starwarsicon">
        <img src={StarWarsIcon} alt="Star Wars" />
      </div>
    </div>
  );
}
