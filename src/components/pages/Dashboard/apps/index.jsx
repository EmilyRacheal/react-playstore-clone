import React from "react";
import "./apps.css";
import { myData } from "../../../../secondDummy/myAppsData";
import MyAppCard from "../../../myAppCard/index";

const Index = () => {
  return (
    <div className="box-border p-7">
      <div className="">
        <h1 className="title">My Android Apps</h1>
      </div>
      <div className="flex flex-wrap w-full gap-2">
        {myData.map((item, i) => {
          return (
            <MyAppCard
              logo={item.logo}
              name={item.name}
              title={item.title}
              description={item.description}
              stars={item.stars}
            />
          );
        })}
      </div>
      {/* <div className="flex flex-col w-11/12">
        <h1 className="title">My Android Apps</h1>
        <div className="flex flex-wrap gap-3">
          {[...Array(9)].map(() => {
            return <AppsCard />;
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Index;
