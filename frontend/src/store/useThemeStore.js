import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("lingoconnect-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("lingoconnect-theme", theme);
    set({ theme });
  },
}));