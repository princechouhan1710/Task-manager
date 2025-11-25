import React from 'react'
import Sidebar from '..//layout/Sidebar'
import { Outlet,NavLink } from 'react-router-dom'
function TDashboard() {
  return (
    <div>
          <div className='  d-flex justify-content-start vh-100 '>
            <div className="h-100 w-25">
     <Sidebar/>
      </div>
        <div className="main d-flex w-75  justify-content-center  " style={{  minHeight:"100vh"}}>
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default TDashboard
