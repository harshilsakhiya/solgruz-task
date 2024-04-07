import React from "react";
import Header from "./Header"
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
