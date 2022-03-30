import React from "react";
import "./kidsCard.css";
import KidsGame from "../../assest/games.webp";
import Avatar from "../../assest/avatar.webp";

const Index = () => {
  return (
    <div className="">
      <div className="border border-cyan-200 w-80">
        <img alt="logo" src={KidsGame} className="" />
        <div className="flex flex-wrap w-full">
          <div>
            {" "}
            <img alt="logo" src={Avatar} className="w-10" />
          </div>
          <div>
            <h3>Guardain Tales</h3>
            <p>Kakao Games Corp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
