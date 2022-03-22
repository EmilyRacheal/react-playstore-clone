import React from 'react'
import "./card.css";
import FacebookIcon from "../../assest/download.png"
import GradeIcon from '@mui/icons-material/Grade';

function index() {
  return (
    <div className=''>
        <div className='bg-white border border-blue-400 card1'>
          <img alt="logo" src={FacebookIcon} className="logo" />
          <div className='py-3 ml-3 '>
            <p>Facebook Lite Meta Platforms, Inc.</p> 
            <span> <GradeIcon fontSize="small"/> </span>
            <span> <GradeIcon fontSize="small"/> </span>
            <span> <GradeIcon fontSize="small"/> </span>
            <span> <GradeIcon fontSize="small"/> </span>   
          </div>
          
        </div>
    </div>
  )
}

export default index