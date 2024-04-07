import React, { useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthServices from "../services/authServices";

function SignUp({setLoginKey}) {
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

  const onlyNumberKey = (evt) => {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
      evt.preventDefault();
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    if (inputValue && !inputValue.lastName && !inputValue.firstName) {
      formIsValid = false;
      errors["firstName"] = "*Please enter firstName!";
    }
    if (inputValue && !inputValue.firstName && !inputValue.lastName) {
      formIsValid = false;
      errors["lastName"] = "*Please enter lastName!";
    }

    if (inputValue && !inputValue.useremail) {
      formIsValid = false;
      errors["useremail"] = "*Please enter email!";
    } else if (
      inputValue.useremail &&
      !inputValue.useremail.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formIsValid = false;
      errors["useremail"] = "*Please enter valid email id!";
    }

    if (inputValue && !inputValue.phone) {
      formIsValid = false;
      errors["phone"] = "*Please enter phone number!";
    } else if (inputValue.phone.length !== 10) {
      formIsValid = false;
      errors["phone"] = "*Please enter 10 digit phone number!";
    }

    if (inputValue && !inputValue.password) {
      formIsValid = false;
      errors["password"] = "*Please enter password!";
    }
    if (inputValue && !inputValue.cnfPassword) {
      formIsValid = false;
      errors["cnfPassword"] = "*Please enter conform password!";
    } else if (inputValue.password !== inputValue.cnfPassword) {
      formIsValid = false;
      errors["cnfPassword"] = "*Passwords does not match!";
    }
    setErrors(errors);
    return formIsValid;
  };

  const userSignUp = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await AuthServices.signUp(inputValue);
        if (res?.success === true) {
          toast.success("user Sign Up successfully");
          setLoginKey("1")
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
        <label className="text-lg text-[#b4b7bf]">First Name</label>
        <Input
          size="large"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
        />
        <span className="text-red-500"> {errors["firstName"]}</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Last Name</label>
        <Input
          size="large"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
        />
        <span className="text-red-500"> {errors["lastName"]}</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Email</label>
        <Input
          size="large"
          placeholder="Email"
          name="useremail"
          onChange={handleChange}
        />
        <span className="text-red-500"> {errors["useremail"]}</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Phone</label>
        <Input
          size="large"
          placeholder="Phone"
          name="phone"
          onKeyPress={onlyNumberKey}
          maxLength={10}
          onChange={handleChange}
        />
        <span className="text-red-500"> {errors["phone"]}</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Password</label>
        <Input.Password
          size="large"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <span className="text-red-500"> {errors["password"]}</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-[#b4b7bf]">Conform Password</label>
        <Input.Password
          size="large"
          name="cnfPassword"
          placeholder="Conform Password"
          onChange={handleChange}
        />
        <span className="text-red-500"> {errors["cnfPassword"]}</span>
      </div>
      <Button
        type="primary"
        disabled={loading}
        className="bg-[#283791] h-10 text-lg"
        onClick={userSignUp}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;
