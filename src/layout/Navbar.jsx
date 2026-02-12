import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm">
      <div className="container-fluid">

        <NavLink className="navbar-brand fs-3 ps-2 fw-bold" to="/" style={{ fontFamily: "Pacifico, cursive" }}>
          Task Craft
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-5 fs-5">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Dashboard/Main">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <NavLink to="/Login">
              <button className="btn btn-outline-light">Login</button>
            </NavLink>
            <NavLink to="/Signin">
              <button className="btn btn-outline-light">Signup</button>
            </NavLink>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
