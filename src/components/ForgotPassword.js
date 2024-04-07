import React from "react";
import { Typography, Input, Button } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
function ForgotPassword() {
  return (
    <>
      <div className="w-1/2 mx-auto my-10 pt-14">
        <div className="bg-white p-12">
          <Title level={3} className="!text-[#283791] text-center">
            Forgot Password?
          </Title>
          <Text className="block text-center text-lg">No worries,</Text>
          <div className="flex flex-col gap-4 mt-7">
            <div className="flex flex-col gap-1">
              <label className="text-lg text-[#b4b7bf]">Email</label>
              <Input size="large" placeholder="Email" />
            </div>
            <Button type="primary" className="bg-[#283791] h-10 text-lg">
              Reset Password
            </Button>
            <Link to="/" className="text-center text-[#283791] text-lg">
              Back to Sign In?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
