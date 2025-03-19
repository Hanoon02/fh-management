import { GoogleLogin } from "@react-oauth/google";
import useAuthHook from "../../hooks/useAuthHook";
import { jwtDecode } from "jwt-decode";
import { ALLOWED_EMAILS } from "../../constants/allowedEmails";
import { useLocation, useNavigate } from "react-router-dom";
import { showToast } from "../../utils/toastUtils";

function AuthenticationWrapperPage() {
  const { setIsAuthenticated, setUserEmail } = useAuthHook();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const email = decoded.email;

    if (ALLOWED_EMAILS.includes(email)) {
      setIsAuthenticated(true);
      setUserEmail(email);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("userEmail", email);
      const redirectedPath = location.state?.from || "/";
      navigate(redirectedPath, { replace: true });
    } else {
      showToast("Access denied. This email is not allowed.", "error");
    }
  };

  const handleLoginError = () => {
    console.log("Login failed");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#3fada8] to-[#3f86a6] p-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center transform transition-transform hover:scale-105">
        <h1 className="text-3xl font-bold text-[#3fada8] mb-4">
          Welcome Back!
        </h1>
        <p className="text-gray-600 mb-6">
          Please log in to continue to your account
        </p>
        <div className="flex justify-center mb-6">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
            theme="filled_blue"
            size="large"
            shape="rectangular"
            text="continue_with"
            className="w-full"
          />
        </div>
        <p className="text-xs text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default AuthenticationWrapperPage;
