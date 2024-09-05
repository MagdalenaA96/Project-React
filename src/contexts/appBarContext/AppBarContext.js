import { createContext } from "react";

export const AppBarContext = createContext({
    appBarSettings: {
        backgroundColor: "rgb(66, 66, 66)",
        menuIconColor: "rgb(255, 255, 255)",
        showIconButton: false,
        title: "My App",
        height: "64px",
        margin: "0 0",
        borderBottom: "solid 1px rgba(255,255,255, 0.12)",
        titleTypography: "",
        subtitle: false,
        padding: "0px",
        alignSelf: "center",

    },
    setAppBarSettings: () => undefined,
});

AppBarContext.displayName = "AppBarContext";
