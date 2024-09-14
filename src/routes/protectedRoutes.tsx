import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {getApi_userInfo} from "../apis";

interface ProtectedRouteProps {
    component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {

    const {isAuthenticated, isProcessing} = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        isAuthenticated === true && getApi_userInfo();
    }, [isAuthenticated]);

    if(isProcessing === true){
        return <span>Validating ... </span>
    }

    return isAuthenticated ? <Component /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
