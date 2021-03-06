import React from "react";
import "./home.css";

import { gameData } from "../../../../dummyData/gamesData";
import Card from "../../../card/index";

const Index = () => {
  return (
    <div className="box-border p-7">
      <div className="flex justify-between py-3 link-width ">
        <h1 className="text-2xl">Popular Apps & Games</h1>
        <button className="px-2 py-1 text-white rounded btn-see">
          See More
        </button>
      </div>
      <div className="flex flex-wrap w-full gap-5">
        {gameData.map((item, i) => {
          return (
            <Card logo={item.logo} name={item.name} company={item.company} />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
