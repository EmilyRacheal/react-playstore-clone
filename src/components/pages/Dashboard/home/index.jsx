import React from "react";

import { gameData } from "../../../../dummyData/gamesData";
import Card from "../../../card/index";

const Index = () => {
  return (
    <div className="box-border p-7">
      <div className="flex justify-between">
        <h1>Popular Gamees and Apps</h1>
        <button>See More</button>
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
