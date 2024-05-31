import { useContext } from "react";
import { AuthContext } from "../provides/AuthProvide";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56" />;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default AdminRoutes;
