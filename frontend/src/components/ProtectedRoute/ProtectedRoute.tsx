import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Kraunama...</div>;
  }

  //  Pataisyta logika
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
