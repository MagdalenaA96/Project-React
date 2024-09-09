import { useContext } from "react";
import { AppBarContext } from "./AppBarContext";

export const useAppBarState = () => {
    const context = useContext(AppBarContext);

    if (!context) {
        throw new Error("You used AppBarContext outside the provider!");
    }
    return context;
};
