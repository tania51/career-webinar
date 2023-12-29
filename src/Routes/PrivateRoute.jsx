import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location.pathname);

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="h-[70vh] flex items-center justify-center text-yellow-400">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate> || <Navigate state={location.pathname} to="/register"></Navigate>
};

export default PrivateRoute;