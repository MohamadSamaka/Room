import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({isLogged}){
    return isLogged? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRoutes;