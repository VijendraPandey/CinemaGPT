import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="bg-img"
          className="bg-cover bg-center w-[100%] h-[100vh]"
        ></img>
      </div>
      <form className="absolute w-3/12 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] p-12 bg-black bg-opacity-80 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-zinc-800 bg-opacity-30 border-[1px] rounded-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-zinc-800 bg-opacity-30 border-[1px] rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-zinc-800 bg-opacity-30 border-[1px] rounded-sm"
        />
        <button className="p-2 my-2 bg-red-700 w-full rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
