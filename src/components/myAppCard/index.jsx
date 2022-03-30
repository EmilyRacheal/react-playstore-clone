import React from "react";
import "./myAppCard.css";
import GoogleDrive from "../../assest/googledrive.webp";
import GradeIcon from "@mui/icons-material/Grade";
import CheckIcon from "@mui/icons-material/Check";

const Index = () => {
  return (
    <div className="">
      <div className="flex py-4 bg-white border border-yellow-400 card-width">
        <div className="">
          <img
            alt="logo"
            src={GoogleDrive}
            className="border border-green-400 "
          />
        </div>

        <div className="g-drive ">
          <h1>Google Drive</h1>
          <h4>Google LLC</h4>
          <p className="mt-2 text-sm">
            Store, access, and share securely with Google drive, part of Google
          </p>
          <div className="flex ">
            <div className="pt-8">
              <span className="pb-3">
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span>
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span>
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span>
                {" "}
                <GradeIcon sx={{ fontSize: 15 }} />{" "}
              </span>
              <span>
                <GradeIcon sx={{ fontSize: 15 }} color="disabled" />
              </span>

              <span className="ml-10">
                <CheckIcon />
              </span>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
