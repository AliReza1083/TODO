// Packages
import { Link } from "react-router-dom";
import { useContext } from "react";

// Context
import { SignOutContext } from "../../context/SignOutPopup";
// Icons
import { FcTodoList } from "react-icons/fc";

const BigScreen = ({ currentUser }) => {
  const { isSignOut, setIsSignOut } = useContext(SignOutContext);

  return (
    <>
      {/* First ul */}
      <ul className="hidden md:block">
        {/* First Link */}
        <Link
          to={`/book/${
            currentUser != null && currentUser.displayName.split(" ").join("")
          }`}
          className="text-black hover:text-opacity-[.8]"
        >
          {currentUser == null ? "Get Started" : "See Your works"}
        </Link>
      </ul>

      {/* Second ul */}
      <ul className="hidden md:flex items-center gap-4 ml-auto">
        {/* Icons */}
        <p className="text-2xl relative">
          <FcTodoList />
        </p>
        {/* User information when logged in */}
        {currentUser == null ? (
          <Link
            className="text-black hover:text-opacity-[.8]"
            to={"/authentication"}
          >
            Sign Up
          </Link>
        ) : (
          <div
            onClick={() => setIsSignOut(!isSignOut)}
            className="relative flex flex-row-reverse gap-4 items-center bg-[#eee] px-4 py-2 rounded-lg cursor-pointer overflow-hidden"
          >
            {/* Animation */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-white bg-opacity-25"
              id="userAnimation"
            ></div>
            {/* User's Image */}
            <img
              className="w-[30px] rounded-full"
              src={currentUser.photoURL}
              referrerPolicy="no-referrer"
              alt=""
            />
            {/* User's Name & Email */}
            <div className="text-right mt-2">
              <h2 className="leading-[.1]">{currentUser.displayName}</h2>
              <small className="text-[8px]">{currentUser.email}</small>
            </div>
          </div>
        )}
      </ul>
    </>
  );
};

export default BigScreen;
