import React from "react";
import Card from "../../card/index";
import MyAppCard from "../../myAppCard/index";

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
      <MyAppCard />
    </div>
  );
};

export default index;
