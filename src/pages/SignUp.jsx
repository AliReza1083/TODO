// Firebase Functions
import { signInWithGoogle, SaveUserDoc } from "../utils/Firebase";

// Icons
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  // Google Sign IN
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGoogle();
    SaveUserDoc(user);
  };

  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center">
      <button
        onClick={SignInWithGoogle}
        className="flex items-center gap-2 bg-white px-8 py-2 rounded-md"
      >
        <FcGoogle />
        Sign In with Google
      </button>
    </div>
  );
};

export default SignUp;
