import React from "react";

import NavBar from "../../../NavBar/navbar";
import TopMenu from "./TopMenu/index";
import SideMenu from "./sideMenu/index";
import "./layout.css";

const Index = ({ children }) => {
  return (
    <div className="parent">
      <div className="topNav">
        <NavBar />
        <TopMenu />
      </div>
      <div className="body">
        <div className="sideNav">
          <SideMenu />
        </div>
        <div className="pageContent">{children}</div>
      </div>
    </div>
  );
};

export default Index;
