import { ButtonGroup } from "@mui/material";
import { signIn } from "next-auth/react";

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    signIn("google"); // Google Authentication
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-blue-600 text-white rounded-md px-4 py-2 ml-2"
      >
        Google ログイン
      </button>
  );
};

export default GoogleLoginButton;
