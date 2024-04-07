import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location?.pathname?.split("/")[1];

  console.log(pathname);
  return (
    <div className="bg-white shadow-md min-w-[250px] p-2.5">
      <p
        className={`text-xl py-4 px-4 rounded-md ${
          pathname === "dashboard" ? " bg-blue-300 " : "cursor-pointer"
        }`}
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </p>
      <p
        className={`text-xl py-4 px-4 rounded-md ${
          pathname === "event" ? " bg-blue-300 " : "cursor-pointer"
        }`}
        onClick={() => navigate("/event")}
      >
        Event
      </p>
    </div>
  );
}

export default Sidebar;
