import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./context/User";
import { SignOutProvider } from "./context/SignOutPopup";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SignOutProvider>
          <App />
        </SignOutProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
