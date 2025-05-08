import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = false;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login"></Navigate>
}
export default ProtectedRoute;