import React from "react";
import "./kidsCard.css";
import GradeIcon from "@mui/icons-material/Grade";

function index({ logo, name, company }) {
  return (
    <div className="">
      <div className="bg-white border card1">
        <img alt="logo" src={logo} className="logo" />
        <div className="py-3 ml-3 cardbody ">
          <p className="name">{name}</p>
          <p className="name">{company}</p>
          {/* <p className="">{company}</p> */}
          <span className="pb-3">
            {" "}
            <GradeIcon sx={{ fontSize: 15 }} />{" "}
          </span>
          <span>
            {" "}
            <GradeIcon sx={{ fontSize: 15 }} />{" "}
          </span>
          <span>
            {" "}
            <GradeIcon sx={{ fontSize: 15 }} />{" "}
          </span>
          <span>
            {" "}
            <GradeIcon sx={{ fontSize: 15 }} />{" "}
          </span>
          <span>
            {" "}
            <GradeIcon sx={{ fontSize: 15 }} color="disabled" />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default index;
