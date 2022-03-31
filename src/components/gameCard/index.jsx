import React from "react";
import "./gameCard.css";
// import KidsGame from "../../assest/games.webp";
import Chess from "../../assest/chess.jpg";
import Avatar from "../../assest/avatar.webp";
import GradeIcon from "@mui/icons-material/Grade";

const Index = () => {
  return (
    <div className="">
      <div className="game-width">
        <img alt="logo" src={Chess} className="game-img " />
        <div className="flex flex-wrap px-4 py-3 bg-white line">
          <div>
            <img alt="logo" src={Avatar} className="w-12" />
          </div>
          <div className="ml-2">
            <h3 className="gaurd">Guardain Tales</h3>
            <p>Kakao Games Corp</p>
            <div className="">
              <span className="text-gray-500 ">
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span className="text-gray-500">
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span className="text-gray-500">
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span className="text-gray-500">
                <GradeIcon sx={{ fontSize: 15 }} />{" "}
              </span>
              <span>
                <GradeIcon sx={{ fontSize: 15 }} color="disabled" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
