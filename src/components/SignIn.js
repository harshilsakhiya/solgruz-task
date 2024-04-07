import React from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Email</label>
        <Input size="large" placeholder="Email" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Password</label>
        <Input.Password size="large" placeholder="Password" />
        <Link
          to="/forgot-password"
          className="text-right text-[#283791] text-lg"
        >
          Forgot Password?
        </Link>
      </div>
      <Button type="primary" className="bg-[#283791] h-10 text-lg rounded-full">
        Sign In
      </Button>
    </div>
  );
}

export default SignIn;
