import React from "react";
import Card from "../../card/index";
import MyAppCard from "../../myAppCard/index";
import GameCard from "../../gameCard/index";

import { Link } from "react-router-dom";
import Navbar from "../../NavBar/navbar";
import "./myapp.css";

const index = () => {
  return (
    <div>
      <Navbar />
      <h1>My apps</h1>
      {/* <Link to="/shops">Go to My shops</Link> */}
      <br />
      <br />
      <br />
      <br />
      <br />

      <Card />
      <br />
      <br />
      <MyAppCard />

      <br />
      <br />
      <br />
      <br />
      <br />
      <GameCard />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default index;
