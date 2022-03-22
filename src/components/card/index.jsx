import React from 'react'
import "./card.css";
import FacebookIcon from "../../assest/download.png"
import GradeIcon from '@mui/icons-material/Grade';

function index() {
  return (
    <div className=''>
        <div className='bg-white border card1'>
          <img alt="logo" src={FacebookIcon} className="logo" />
          <div className='py-3 ml-3 '>
            <p>Facebook Lite Meta Platforms,</p> 
            <span className='pb-3'> <GradeIcon sx={{ fontSize: 15}} /> </span>
            <span> <GradeIcon sx={{ fontSize: 15 }}/> </span>
            <span> <GradeIcon sx={{ fontSize: 15 }}/> </span>
            <span> <GradeIcon sx={{ fontSize: 15 }}/> </span> 
            <span> <GradeIcon sx={{ fontSize: 15 }} color="disabled" /> </span>  
          </div>
          
        </div>
    </div>
  )
}

export default index