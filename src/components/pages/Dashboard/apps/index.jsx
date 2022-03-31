import React from "react";
import "./apps.css";
import AppsCard from "../../../myAppCard/index";
import { MyApps } from "../../../../secondDummy/myAppsData";

const Index = () => {
  return (
    <div className="box-border p-7">
      <div className="">
        <h1 className="title">My Android Apps</h1>
      </div>
      <div className="flex flex-wrap w-full gap-5">
        {MyApps.map((item, i) => {
          return <gameCard />;
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
