import { useEffect, useState } from "react";
import { ALLOWED_EMAILS } from "../constants/allowedEmails";
function useAuthHook() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedAuth === "true" && ALLOWED_EMAILS.includes(storedEmail)) {
      setIsAuthenticated(true);
      setUserEmail(storedEmail);
    }
  }, []);

  return {
    isAuthenticated,
    setIsAuthenticated,
    setUserEmail,

  };
}
export default useAuthHook;
