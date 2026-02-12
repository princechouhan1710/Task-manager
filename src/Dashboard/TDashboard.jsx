import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";

function Layout() {
  return (
    <div className="d-flex vh-100">

      {/* Sidebar */}
      <div
        className="h-100"
        style={{
          width: "20%",
          minWidth: "220px",
          marginRight: "1rem", // adds gap between sidebar and main
        }}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div
        className="flex-grow-1 p-4 shadow overflow-auto rounded"
        style={{
          minHeight: "100vh",
          backgroundColor: "#1e1e2f",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
