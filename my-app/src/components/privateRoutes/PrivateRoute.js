import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function PrivateRoute({children}) {
    const { isAuth } = useAuth();

    console.log(isAuth);
    

    return isAuth ? children : <Navigate to="/login" replace/>
}

export default PrivateRoute;