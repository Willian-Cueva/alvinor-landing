import { create } from "zustand";

interface State {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
  closeMenu: () => void;
}

export const useUIManage = create<State>()((set) => ({
  isMenuOpen: true,
  toggleMenuOpen: () =>
    set((state) => ({
      isMenuOpen: !state.isMenuOpen,
    })),
  closeMenu: () =>
    set(() => ({
      isMenuOpen: true,
    })),
}));
