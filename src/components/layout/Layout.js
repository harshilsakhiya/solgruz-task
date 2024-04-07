import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex h-screen pt-[56px]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
