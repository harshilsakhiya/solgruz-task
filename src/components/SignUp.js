import React from "react";
import {  Input, Button } from 'antd';


function SignUp() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">First Name</label>
        <Input size="large" placeholder="First Name" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Last Name</label>
        <Input size="large" placeholder="Last Name" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Email</label>
        <Input size="large" placeholder="Email" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Password</label>
        <Input.Password size="large" placeholder="Password" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Conform Password</label>
        <Input.Password size="large" placeholder="Conform Password" />
      </div>
      <Button type="primary" className="bg-[#283791] h-10 text-lg">
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;
