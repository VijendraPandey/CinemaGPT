import React, { useRef, useState } from "react";
import Header from "./Header";
import validData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { avatar, bgImage } from "/utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = validData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //Sign In / Sign Up Logic
    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avatar,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              const errorCode = error.code.split("/")[1].replace(/-/g, " ");
              const errorMessage = error.message;
              setErrorMessage(errorCode);
            });
        })
        .catch((error) => {
          const errorCode = error.code.split("/")[1].replace(/-/g, " ");
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code.split("/")[1].replace(/-/g, " ");
          const errorMessage = error.message;
          setErrorMessage(errorCode);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative">
      <Header />
      <div className="w-screen h-screen">
        <img
          src={bgImage}
          alt="bg-img"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-[91%] md:w-3/12 top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] p-12 bg-black bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-zinc-800 bg-opacity-30 border-[1px] rounded-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-zinc-800 bg-opacity-30 border-[1px] rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-zinc-800 bg-opacity-30 border-[1px] rounded-sm"
        />
        <p className="text-red-600 text-sm font-semibold">{errorMessage}</p>
        <button
          className="p-2 my-2 bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}
        >
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
