import React from "react";

import KidsCard from "../../../kidsCard/index";
import { kidsData } from "../../../../dummyData/kidsGameData";

const Index = () => {
  return (
    <div className="box-border p-7">
      <div className="">
        <h1 className="title">My Android Apps</h1>
      </div>
      <div className="flex flex-wrap w-full gap-2">
        {kidsData.map((item, i) => {
          return (
            <KidsCard
              logo={item.logo}
              name={item.name}
              company={item.company}
              stars={item.stars}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
