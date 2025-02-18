import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("userData");
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
