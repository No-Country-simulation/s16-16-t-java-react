import { create } from "zustand";

interface StoreState {
  state: string;
  setState: (newState: string) => void;
  maxPrice: number;
  setMaxPrice: (newMaxPrice: number) => void;
  minPrice: number;
  setMinPrice: (newMinPrice: number) => void;
}

const useStore = create<StoreState>((set) => ({
  state: "",
  setState: (newState) => set({ state: newState }),
  maxPrice: 4000,
  setMaxPrice: (newMaxPrice) => set({ maxPrice: newMaxPrice }),
  minPrice: 10,
  setMinPrice: (newMinPrice) => set({ minPrice: newMinPrice }),
}));

export default useStore;
