// Packages
import { Link } from "react-router-dom";

// Firebase
import { SignOut } from "../../utils/Firebase";

// Icons
import { AiFillCloseCircle } from "react-icons/ai";

const SmallScreen = ({ currentUser, isOpen, setIsOpen }) => {
  // Signing Out
  const SigningOut = async () => {
    const response = await SignOut();
    setIsOpen(false);
  };

  return (
    <div
      style={{ boxShadow: "-10px 0 40px rgba(0, 0, 0, .2)" }}
      className={`block md:hidden fixed top-0 right-0 bottom-0 w-[80%] sm:w-1/2 h-screen bg-white py-8 z-[9999] translate-x-full ${
        isOpen && "translate-x-0"
      } duration-300`}
    >
      {currentUser != null && (
        // Container
        <div>
          <AiFillCloseCircle
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl"
          />

          {/* User's Information -- Photo, Name & Email */}
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-[60px]"
              src={currentUser.photoURL}
              alt=""
            />
            <p className="font-semibold text-lg">{currentUser.displayName}</p>
            <small className="text-black text-opacity-60 text-xs">
              {currentUser.email}
            </small>
          </div>

          {/* Links */}
          <ul className="mt-8">
            <Link
              onClick={() => setIsOpen(false)}
              to={`/book/${
                currentUser != null &&
                currentUser.displayName.split(" ").join("")
              }`}
              className="inline-block w-full text-black bg-[#f2f2f2] hover:text-opacity-[.8] px-4 py-3"
            >
              {currentUser == null ? "Get Started" : "See Your works"}
            </Link>
            {/* Button inside the ul for signing out */}
            <button
              onClick={SigningOut}
              className="text-xs font-semibold text-white absolute bottom-0 left-0 inline-block w-full bg-red-700 hover:text-opacity-[.8] px-4 py-3"
            >
              Sign Out
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SmallScreen;
