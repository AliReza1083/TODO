import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/User";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route
          path="authentication"
          element={
            currentUser == null ? (
              <SignUp />
            ) : (
              <Navigate
                to={`/book/${currentUser.displayName.split(" ").join("")}`}
              />
            )
          }
        ></Route>
        <Route
          path="book/:id"
          element={
            currentUser != null ? <Todo /> : <Navigate to={"/authentication"} />
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
