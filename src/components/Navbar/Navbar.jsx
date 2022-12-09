// Packages
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

// Context
import { UserContext } from "../../context/User";

// Components
import SignOut from "../SignOut"; // button for sign out
import BigScreen from "./BigScreen"; // < 768px
import SmallScreen from "./SmallScreen"; // > 768px

// Icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false); // Toggling the navbar
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <nav className="bg-white fixed top-0 left-0 w-full h-16 shadow-lg flex items-center justify-between gap-8 px-4 lg:px-8">
        <Link to={"/"} className="text-3xl font-bold">
          Todo
        </Link>

        {/* > 768px */}
        <BigScreen currentUser={currentUser} />

        {/* > 768px */}
        <SmallScreen
          currentUser={currentUser} // User's Information
          isOpen={isOpenNav} // Navbar toggle
          setIsOpen={setIsOpenNav} // Update the value for closing and opening
        />

        {/* > 768px */}
        {currentUser != null ? (
          <HiOutlineMenuAlt3
            onClick={() => setIsOpenNav(true)}
            className="md:hidden text-2xl"
          />
        ) : (
          <Link to="/authentication" className="md:hidden">
            Sign Up
          </Link>
        )}
      </nav>

      {/* Sign Out toggle button */}
      <SignOut />

      {/* background image for every page */}
      <div id="bg-image"></div>

      <Outlet />
    </div>
  );
};

export default Navbar;
