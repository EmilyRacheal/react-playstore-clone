import React from 'react'
import "./navbar.css";
import Logo from "../../assest/playstorelogo.png";
import UserImage from "../../assest/dumy.png";
import ViewComfyIcon from '@mui/icons-material/ViewComfy';



const navbar = () => {
  return (
    <div className="">
      
      
      <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="flex flex-wrap items-center justify-between mx-auto container-fluid">
          <a href="#" class="flex items-center">
            <img alt="logo" src={Logo} className="logo" />
          </a>
          
          <div className="flex items-center md:order-1">
          <a href="" > <ViewComfyIcon /> </a>
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
            
              <span className="sr-only">Open user menu</span>
              
              
              <img alt="UserImage" src={UserImage} className="w-8 h-8 rounded-full" />
            </button>

            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          
          
          <div className="flex items-center justify-center ">
            <div className="flex border-2 border-gray-200 rounded">
              <input type="text" className="px-8 py-1 w-80" placeholder="Search..." />
                <button className="px-4 py-1 text-white bg-gray-600 border-l ">
                  <svg class="w-6 h-6 text-white-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
                </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default navbar