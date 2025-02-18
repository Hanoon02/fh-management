import { Navigate, useLocation } from "react-router-dom";
import useAuthHook from "../hooks/useAuthHook";

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useAuthHook();
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
}
export default ProtectedRoutes;
