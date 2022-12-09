// Link
import { Link } from "react-router-dom";

// Images
import HeaderIMG from "../assets/Header img.png";

const Home = () => {
  return (
    <div className="flex justify-center">
      {/* Container */}
      <div className="relative w-full max-w-[1500px] h-screen 2xl:h-[800px] flex justify-center lg:justify-start lg:items-center overflow-hidden">
        <div className=" px-4">
          {/* Header Text */}
          <h1 className="text-4xl font-bold tracking-[-3px] md:text-6xl md:tracking-[-5px] lg:text-7xl mt-28 lg:mt-0">
            Use now for a bright Future
          </h1>
          <p className="text-2xl font-bold text-black text-opacity-70">
            Always write your tasks
          </p>
          <Link
            to={"/authentication"}
            className="bg-violet-700 px-4 py-2 inline-block rounded-md text-white mt-8"
          >
            Get Started
          </Link>
        </div>
        {/* Header IMG */}
        <img
          className="absolute right-0 bottom-[100px] md:bottom-0 lg:top-1/2 lg:-translate-y-1/2 max-w-[700px] -z-10 "
          src={HeaderIMG}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
