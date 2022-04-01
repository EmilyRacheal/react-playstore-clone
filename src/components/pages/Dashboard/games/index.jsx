import React from "react";
import "./index";

// import AppGame from "../../../gameCard/index";
import { myGame } from "../../../../thirdDummyData/gameplay";
import TheGame from "../../../gameCard/index";

const Index = () => {
  return (
    <div className="box-border p-7">
      <div className="flex justify-between py-5 link-width ">
        <h1 className="text-2xl">Discover recomended Games</h1>
        <button className="px-2 py-1 text-white rounded btn-see">
          See More
        </button>
      </div>
      <div className="flex flex-wrap w-full gap-5">
        {myGame.map((item, i) => {
          return (
            <TheGame
              logo={item.logo}
              icon={item.icon}
              title={item.title}
              description={item.description}
              stars={item.stars}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
