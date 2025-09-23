// myZustand.js
import { create } from "zustand";

const myZustand = create((set) => ({
  // --- state ---
  isMenuOpen: false,

  // --- actions ---
  toggleMenu: () => set((state) => ({ isMenuOpen: !state })),
}));

export default myZustand;
