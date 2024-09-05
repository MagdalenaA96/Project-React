import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    logout: () => set({ user: null, error: null }),
    setUser: (email) =>
        set({
            user: {
                email,
                isAuthenticated: true,
            },
            error: null,
        }),
    setError: (errorMessage) => set({ error: errorMessage }),
}));
