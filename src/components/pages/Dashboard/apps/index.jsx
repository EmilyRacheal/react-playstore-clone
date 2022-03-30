import React from "react";
import "./apps.css";
import AppsCard from "../../../myAppCard/index";

const Index = () => {
  return (
    <div className="flex justify-center w-full mt-9">
      <div className="flex flex-col w-11/12 ">
        <h1 className="title">My Android Apps</h1>
        <div className="flex flex-wrap gap-3">
          {[...Array(9)].map(() => {
            return <AppsCard />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
