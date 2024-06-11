import { LoginPage, RegisterPage } from "../pages";

export const routes = [
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
];
