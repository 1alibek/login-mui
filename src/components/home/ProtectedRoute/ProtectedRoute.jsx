import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("userData");
  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
