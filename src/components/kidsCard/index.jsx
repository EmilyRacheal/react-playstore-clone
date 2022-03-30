import React from "react";
import "./kidsCard.css";
import KidsGame from "../../assest/games.webp";
import Avatar from "../../assest/avatar.webp";

const Index = () => {
  return (
    <div className="">
      <div>
        <img alt="logo" src={KidsGame} className="" />
        <div>
          <img alt="logo" src={Avatar} className="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
