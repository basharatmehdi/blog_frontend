import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../InputField";
import Button from "../Button";

const Login = () => {
  // const url = window.location.href.split("/");
  // const isRegister = url[url.length - 1] === "register";
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Login form */}
      <div className="bg-gray-500/20 py-14 px-12 md:px-20 rounded-md">
        <h3 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
          {!isRegister ? "Login" : "Register"}
        </h3>
        <InputField
          label={"Email"}
          id={"email"}
          type={"email"}
          placeholder={"example@domain.com"}
        />

        {isRegister && (
          <InputField
            label={"Username"}
            id={"username"}
            type={"text"}
            placeholder={"johndoe"}
          />
        )}

        <InputField
          label={"Password"}
          id={"password"}
          type={"password"}
          placeholder={"*********"}
        />

        {isRegister && (
          <InputField
            label={"Confirm Password"}
            id={"confirm"}
            type={"text"}
            placeholder={"*********"}
          />
        )}
        <div className="flex items-center mb-5">
          {/* <input
            className="bg-green-500/40 font-semibold tracking-wide px-4 py-1 rounded-md mr-auto"
            id="login"
            type="submit"
            value={!isRegister ? "Sign in" : "Sign up"}
          /> */}
          <Button>{!isRegister ? "Sign in" : "Sign up"}</Button>
          {!isRegister && (
            <Link to="#" className="text-gray-300 underline ml-auto">
              Forgot Password
            </Link>
          )}
        </div>
        <p className="text-gray-300 text-center">
          {!isRegister
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            to="#"
            onClick={() => setIsRegister(!isRegister)}
            className="text-green-500 underline"
          >
            {!isRegister ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
