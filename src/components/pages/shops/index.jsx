import React from 'react'

import { Link } from "react-router-dom"
import Navbar from "../../NavBar/navbar"

const Index = () => {
  return (
    <div>
        <Navbar />
        <h1>Shops pages</h1>
        <Link to="/">Go to My Apps Page</Link>
    </div>
  )
}

export default Index