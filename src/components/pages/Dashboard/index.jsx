import React, { Fragment } from 'react'
import TopMenu from "./layout/TopMenu/index"
import SideMenu from "./layout/sideMenu/index"


function index() {
  return (
    <Fragment>
      <TopMenu />
      <SideMenu />
    </Fragment>
  )
}

export default index