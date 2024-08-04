import { create } from "zustand";
import { propCategories, PropProduct } from "./interfaces";

interface StoreState {
  maxPrice: number;
  setMaxPrice: (newMaxPrice: number) => void;
  minPrice: number;
  setMinPrice: (newMinPrice: number) => void;
  loading: boolean;
  setLoading: (load: boolean) => void;
  categories: propCategories[];
  setCategories: (catego: propCategories[]) => void;
  selectedCategory: string[];
  setSelectedCategory: (category: string) => void;
  removeCategory: (category: string) => void;
  clearSelectedCategory: () => void;
  products: PropProduct[];
  setProducts: (products: PropProduct[]) => void;
  cart: PropProduct[];
  addToCart: (product: PropProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  priceCart: number;
  setPriceCart: (newPriceCart: number) => void;
}

const useStore = create<StoreState>((set) => ({  
  // ESTADO DE LOS PRECIOS
  maxPrice: 4000,
  setMaxPrice: (newMaxPrice) => set({ maxPrice: newMaxPrice }),
  minPrice: 10,
  setMinPrice: (newMinPrice) => set({ minPrice: newMinPrice }),
  
  // ESTADO DEL LOADER
  loading: true,
  setLoading: (load) => set({ loading: load }),
  
  // ESTADOS PARA LA SOLICITUD DE CATEGORIAS
  categories: [],
  setCategories: (categories) => set({ categories }),
  
  // SELECCION DE CATEGORIAS
  selectedCategory: [],
  setSelectedCategory: (category: string | string[]) =>
    set((state) => ({
      selectedCategory: Array.isArray(category)
        ? [...state.selectedCategory, ...category]
        : [...state.selectedCategory, category],
    })),
  removeCategory: (category) =>
    set((state) => ({ selectedCategory: state.selectedCategory.filter(catego => catego !== category) })),
  clearSelectedCategory: () => set({ selectedCategory: [] }),

  // ESTADO PARA LA SOLICITUD DE PRODUCTOS
  products: [],
  setProducts: (products) => set({ products }),

  // ESTADOS Y PARA LOS PRODUCTOS EN EL CARRITO
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity ?? 0) + 1 }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
  priceCart: 0,
  setPriceCart: (newMinPrice) => set({ minPrice: newMinPrice }),

}));

export default useStore;
