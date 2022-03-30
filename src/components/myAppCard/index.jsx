import React from "react";
import "./myAppCard.css";
import GoogleDrive from "../../assest/googledrive.webp";
import GradeIcon from "@mui/icons-material/Grade";
import CheckIcon from "@mui/icons-material/Check";

const Index = () => {
  return (
    <div className="">
      <div className="flex py-1 bg-white card-width">
        <div className="w-1/2 ">
          <img alt="logo" src={GoogleDrive} className="" />
        </div>

        <div className="w-1/2 py-2 pr-3 g-drive">
          <h1 className="text-xl">Google Drive</h1>
          <h6>Google LLC</h6>
          <p className="mt-3 text-sm">
            Store, access, and share securely with Google drive, part of Google
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <span className="text-gray-500 ">
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span className="text-gray-500">
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span className="text-gray-500">
                <GradeIcon sx={{ fontSize: 15 }} />
              </span>
              <span className="text-gray-500">
                <GradeIcon sx={{ fontSize: 15 }} />{" "}
              </span>
              <span>
                <GradeIcon sx={{ fontSize: 15 }} color="disabled" />
              </span>
            </div>

            <span className="flex justify-center text-white align-middle round-check bg-lime-400">
              <CheckIcon sx={{ fontSize: 10 }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
