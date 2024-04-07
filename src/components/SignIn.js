import React, { useState } from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import AuthServices from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignIn() {
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    if (e.target.name.trim()) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (inputValue && !inputValue.email) {
      formIsValid = false;
      errors["email"] = "*Please enter email!";
    } else if (
      inputValue.email &&
      !inputValue.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formIsValid = false;
      errors["email"] = "*Please enter valid email id!";
    }

    if (inputValue && !inputValue.password) {
      formIsValid = false;
      errors["password"] = "*Please enter password!";
    }
    setErrors(errors);
    return formIsValid;
  };

  const userSignIn = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await AuthServices.signIn(inputValue);
        if (res?.success === true) {
          localStorage.setItem("token", res?.data?.token);
          toast.success(res?.message);
          navigate("/");
          setLoading(false);
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Email</label>
        <Input
          size="large"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <span className="text-red-500"> {errors["email"]}</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Password</label>
        <Input.Password
          size="large"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <span className="text-red-500"> {errors["password"]}</span>

        <Link
          to="/forgot-password"
          className="text-right text-[#283791] text-lg"
        >
          Forgot Password?
        </Link>
      </div>
      <Button
        type="primary"
        disabled={loading}
        className="bg-[#283791] h-10 text-lg rounded-full"
        onClick={userSignIn}
      >
        Sign In
      </Button>
    </div>
  );
}

export default SignIn;
