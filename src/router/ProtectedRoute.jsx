import { useUserStore } from "../store/useUserStore";
import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";

export const ProcectedRoute = ({ children }) => {
    const user = useUserStore((state) => state.user);

    if (user === null) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

ProcectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};
