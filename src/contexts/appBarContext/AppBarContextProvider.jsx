import { useState } from "react";
import PropTypes from "prop-types";

import { AppBarContext } from "./AppBarContext";

export const AppBarContextProvider = ({ children }) => {
    const defaultSettings = {
        backgroundColor: "rgb(66, 66, 66)",
        menuIconColor: "rgb(255, 255, 255)",
        showIconButton: false,
        title: "My App",
        height: "64px",
        margin: "0 0",
        borderBottom: "solid 1px rgba(255,255,255, 0.12)",
        titleTypography: "h3",
        subtitle: false,
        padding: "0px",
        alignSelf: "center",
    };

    const [appBarSettings, setAppBarSettings] = useState(defaultSettings);

    const resetAppBar = () => {
        setAppBarSettings(defaultSettings);
    };

    return (
        <AppBarContext.Provider
            value={{ appBarSettings, setAppBarSettings, resetAppBar }}
        >
            {children}
        </AppBarContext.Provider>
    );
};

AppBarContextProvider.propTypes = {
    children: PropTypes.element.isRequired,
};
