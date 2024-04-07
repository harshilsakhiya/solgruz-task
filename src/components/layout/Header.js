import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full z-10 fixed top-0 py-2.5 px-3  bg-[#283791] text-3xl  justify-between text-white font-normal flex">
        <div className={`uppercase ${token} ? "" : "text-center"`}>Solgruz</div>
        {token && (
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            LogOut
          </Button>
        )}
      </div>
    </>
  );
}

export default Header;
