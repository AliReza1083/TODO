import { createContext, useState } from "react";

export const SignOutContext = createContext({
  isSignOut: false,
  setIsSignOut: () => {},
});

export const SignOutProvider = ({ children }) => {
  const [isSignOut, setIsSignOut] = useState(false);
  const value = { isSignOut, setIsSignOut };

  return (
    <SignOutContext.Provider value={value}>{children}</SignOutContext.Provider>
  );
};
