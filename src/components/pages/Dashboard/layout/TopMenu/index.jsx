import React from "react";
import "./topMenu.css";
import GridViewIcon from "@mui/icons-material/GridView";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";

function index() {
  return (
    <div className="flex items-center justify-center w-full h-12 bg-white topNav">
      <div className="h-12 top1 bg-lime-600">
        <span className="flex items-center w-full px-6 py-2 text-xl text-white ">
          <span className="">
            {" "}
            <GridViewIcon />{" "}
          </span>
          <span className="ml-4">Apps</span>
        </span>
      </div>

      <div className="flex justify-between h-10 px-6 top2">
        <div className="pt-2">
          <ul className="flex ">
            <li className="pr-3 mx-3 home">Category</li>
            <li className="mx-3">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="mx-3">Top charts</li>
            <li className="mx-3">New releases</li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <span className=" icon1">
            {" "}
            <ContactSupportIcon />{" "}
          </span>
          <span className="icon2">
            {" "}
            <SettingsIcon />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default index;
