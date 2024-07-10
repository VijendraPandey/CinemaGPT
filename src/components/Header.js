import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { iconURL, logo } from "../utils/constants";
import { toggleGeminiSearchView } from "../utils/geminiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGeminiSearch = useSelector((store) => store.gemini.showGeminiSearch);

  const handleGeminiSearchClick = () => {
    dispatch(toggleGeminiSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Sign In
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        //Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black w-full flex flex-col md:flex-row justify-between items-center">
      <div className="flex justify-center items-center w-[40%] md:w-auto">{logo}</div>
      {user && (
        <div className="flex items-center -mt-24 gap-5">
          <button
            onClick={handleGeminiSearchClick}
            className="py-2 px-4 bg-purple-400 text-white rounded-md bg-opacity-55"
          >
            {!showGeminiSearch ? "Gemini Search" : "Homepage"}
          </button>
          <img src={iconURL} alt="user-icon" className="hidden md:block"></img>
          <button
            onClick={handleSignOut}
            className="border-2 border-zinc-700 px-3 py-1 text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
