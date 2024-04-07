import React from "react";
import { Tabs } from "antd";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function SignInSignUp() {
  const items = [
    {
      key: "1",
      label: "Sign In",
      children: (
        <div>
          <SignIn />
        </div>
      ),
    },
    {
      key: "2",
      label: "Sign Up",
      children: (
        <div>
          <SignUp />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="w-1/2 mx-auto my-10 pt-14">
        <div className="bg-white p-12">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </>
  );
}

export default SignInSignUp;
