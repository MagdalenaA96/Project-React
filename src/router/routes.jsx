import {
    DashboardPage,
    JobsDirectory,
    LoginPage,
    RegisterPage,
    ResetPage,
    UsersPage,
} from "../pages";
import { ProcectedRoute } from "./ProtectedRoute";

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
    {
        path: "/dashboard",
        element: (
            <ProcectedRoute>
                <DashboardPage />
            </ProcectedRoute>
        ),
    },
    {
        path: "/management/users",
        element: (
            <ProcectedRoute>
                <UsersPage />
            </ProcectedRoute>
        ),
    },
    {
        path: "/jobs-directory",
        element: (
            <ProcectedRoute>
                <JobsDirectory />
            </ProcectedRoute>
        ),
    },
];
