import { LoginPage, RegisterPage, ResetPage } from "../pages";

export const routes = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/reset-password",
        element: <ResetPage />,
    },
];
