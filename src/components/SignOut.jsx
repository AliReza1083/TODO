// Packages
import React, { useContext } from "react";

// Firebase Functions
import { SignOut as SigningOut } from "../utils/Firebase";

// Context
import { SignOutContext } from "../context/SignOutPopup";

const SignOut = () => {
  const { isSignOut, setIsSignOut } = useContext(SignOutContext);

  // Signing Out
  const signOut = async () => {
    const response = await SigningOut();
    setIsSignOut(false);
  };

  return (
    <div>
      {isSignOut && (
        <div
          onClick={signOut}
          id="button"
          className="absolute top-[80px] right-8 bg-red-700 font-bold text-white text-center p-3 w-[100px] rounded-lg cursor-pointer z-50"
        >
          Sign Out
        </div>
      )}
    </div>
  );
};

export default SignOut;
