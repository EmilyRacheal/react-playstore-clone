import React from "react";
import "./gameCard.css";
import KidsGame from "../../assest/games.webp";
import Avatar from "../../assest/avatar.webp";

const Index = () => {
  return (
    <div className="">
      <div className="game-width">
        <img alt="logo" src={KidsGame} className="game-img " />
        <div className="flex flex-wrap px-4 py-3 bg-white">
          <div>
            {" "}
            <img alt="logo" src={Avatar} className="w-12" />
          </div>
          <div className="ml-2">
            <h3>Guardain Tales</h3>
            <p>Kakao Games Corp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
