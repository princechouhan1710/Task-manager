import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        
        <div className="d-flex flex-column flex-shrink-0  p-3 color w-100 vh-100 text-light"       >
          <a
            
            className="d-flex  align-items-center mb-3 mb-md-0 me-md-auto   link-body-emphasis text-light text-decoration-none"
          >
            <svg
              className="bi pe-none me-2"
              width="40"
              height="32"
              aria-hidden="true"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-3">Task Manager</span>
          </a>
          <hr />
          <ul className="nav nav-pills  d-flex h-75 fs-5 justify-content-between flex-column text-light mb-auto">

            <li>
              <NavLink to='Main'  className="nav-link text-light">
                
                Dashboard
              </NavLink>
            </li>
            <li>
            <NavLink to='CompleteTask' className="nav-link text-light">
    Complete Task
</NavLink>
            </li>
             <li>
            <NavLink to='PendingTask' className="nav-link text-light">
    Pending Task
</NavLink>
            </li>
             <li>
            <NavLink to='ProgressTask' className="nav-link text-light">
    Progress Task
</NavLink>
            </li>
             <li>
            <NavLink to='DeferredTask' className="nav-link text-light">
      Deferred Task
</NavLink>
            </li>
             <li>
            <NavLink to='DeployedTask' className="nav-link text-light">
     Deployed Task
</NavLink>

            </li>
             <li>
            <NavLink to='NewTask' className="nav-link text-light">
          Add New Task
</NavLink>

            </li>
             <li>
            <NavLink to='Taskstats' className="nav-link text-light">
     Task  Stats
</NavLink>

            </li>
             <li>
          

            </li>
            
          
          </ul>
          <hr />
  <NavLink to='/' className="nav-link text-light btn bg-secondary py-2">
    Back to Home Page
</NavLink>
        
      </div>
    </div>
  )
}

export default Sidebar
