import { create } from "zustand";

interface StoreState {
  state: string;
  setState: (newState: string) => void;
}

const useStore = create<StoreState>((set) => ({
  state: "",
  setState: (newState) => set({ state: newState }),
}));

export default useStore;
