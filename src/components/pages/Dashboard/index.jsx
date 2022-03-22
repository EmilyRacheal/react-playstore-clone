import React, { Fragment } from 'react'
import TopMenu from "./layout/TopMenu/index"
import SideMenu from "./layout/sideMenu/index"
import Card from "./card/index"


function index() {
  return (
    <Fragment>
      <TopMenu />
      <SideMenu />
      <Card />
    </Fragment>
  )
}

export default index