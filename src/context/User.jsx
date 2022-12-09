import { createContext, useEffect, useState } from "react";
import { AuthChanged } from "../utils/Firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    AuthChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
