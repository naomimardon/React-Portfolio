import React from "react";
import "./hero.css";

function Hero(props) {
  return (
    <div className="hero text-end">
      {props.children}
    </div>
  );
}

export default Hero;