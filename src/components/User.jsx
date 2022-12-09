const User = ({ currentUser }) => {
  return (
    <div
      id="user" // Hover and animation is index.css
      className="relative flex-col items-center justify-center h-44 gap-1 border border-black border-opacity-40 rounded-lg overflow-hidden hidden lg:flex"
    >
      {/* Image */}
      <img className="rounded-full" src={currentUser.photoURL} alt="" />
      {/* User's Name */}
      <h1 className="text-xl font-bold leading-[.5] mt-4">
        {currentUser.displayName}
      </h1>
      {/* User's Email */}
      <small className="text-black text-opacity-70 mt-1">
        {currentUser.email}
      </small>
    </div>
  );
};

export default User;
