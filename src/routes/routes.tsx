import { createBrowserRouter } from "react-router-dom";
import {LoginPage} from "../pages/login";
import {SignupPage} from "../pages/singup";
import pagePaths from "./page-paths";
import ProtectedRoute from "./protectedRoutes";

const Temp = () => (<h1>FOLK</h1>)

export const router = createBrowserRouter([
    {
        path: pagePaths.LOGIN_PAGE,
        element: <LoginPage />,
    },
    {
        path: pagePaths.SIGNUP_PAGE,
        element: <SignupPage />,
    },
    {
        path: pagePaths.DASHBOARD_PAGE,
        element: <ProtectedRoute component={Temp}/>,
    },
]);
