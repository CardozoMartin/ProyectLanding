import { create } from "zustand";

const useStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light', // Recupera el tema de localStorage o usa 'light' como tema por defecto
  setTheme: (newTheme) => {
    localStorage.setItem('theme', newTheme); // Guarda el nuevo tema en localStorage
    set({ theme: newTheme }); // Actualiza el estado del tema
  },
}));

export default useStore;