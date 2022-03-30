import React from "react";
import "./myAppCard.css";
import GoogleDrive from "../../assest/googledrive.webp";
import GradeIcon from "@mui/icons-material/Grade";
import CheckIcon from "@mui/icons-material/Check";
import { color } from "@mui/system";

const Index = () => {
  return (
    <div className="">
      <div className="flex py-4 bg-white card-width">
        <div className="">
          <img alt="logo" src={GoogleDrive} className="" />
        </div>

        <div className="ml-5 g-drive">
          <h1 className="text-xl">Google Drive</h1>
          <h6>Google LLC</h6>
          <p className="mt-4 text-sm">
            Store, access, and share securely with Google drive, part of Google
          </p>
          <div className="pt-8">
            <span className="pb-3 text-gray-500">
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

            <span className="ml-10 text-center text-white round-check bg-lime-400">
              <CheckIcon sx={{ fontSize: 15 }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
