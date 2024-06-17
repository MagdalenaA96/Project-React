import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    logout: () => set({ user: null }),
    setUser: (email) =>
        set({
            user: {
                email,
                isAuthenticated: true,
            },
        }),
}));
