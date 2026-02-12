import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `nav-link text-light text-center rounded-3  py-2 fw-semibold ${
      isActive ? "bg-primary shadow-sm" : "sidebar-link"
    }`;

  return (
    <div className="vh-100">
      <div
        className="d-flex flex-column p-4 vh-100 shadow"
        style={{
          backgroundColor: "#1e1e2f", 
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        {/* Logo */}
        <NavLink to={"/"} className="text-center text-decoration-none " >
          <span className="fs-3 fw-bold" style={{ color: "#ffffff" }}>
            Task Manager
          </span>
        </NavLink >

        <hr className="border-light opacity-25" />

        {/* Menu Items */}
        <ul className="nav nav-pills flex-column gap-3 fs-5 mb-auto ">
          <li>
            <NavLink to="Main" className={linkClass}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="CompleteTask" className={linkClass}>
              Complete Task
            </NavLink>
          </li>

          <li>
            <NavLink to="PendingTask" className={linkClass}>
              Pending Task
            </NavLink>
          </li>

          <li>
            <NavLink to="ProgressTask" className={linkClass}>
              Progress Task
            </NavLink>
          </li>

          <li>
            <NavLink to="DeferredTask" className={linkClass}>
              Deferred Task
            </NavLink>
          </li>

          <li>
            <NavLink to="DeployedTask" className={linkClass}>
              Deployed Task
            </NavLink>
          </li>

          <li>
            <NavLink to="NewTask" className={linkClass}>
              Add New Task
            </NavLink>
          </li>

          <li>
            <NavLink to="Taskstats" className={linkClass}>
              Task Stats
            </NavLink>
          </li>
        </ul>

        <hr className="border-light opacity-25" />

        {/* Back Button */}
        <NavLink
          to="/"
          className="btn w-100 py-2 fw-semibold"
          style={{
            backgroundColor: "#343a40",
            color: "#ffffff",
            fontSize: "0.95rem",
          }}
        >
          Back to Home Page
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
