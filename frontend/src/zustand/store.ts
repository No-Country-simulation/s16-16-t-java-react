import { create } from 'zustand';

const useStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products}),
  cart: [],
  addToCart: (product) => set((state) => {
    const existingProduct = state.cart.find(item => item.id === product.id);
    if (existingProduct) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    } else {
      return {
        cart: [...state.cart, { ...product, quantity: 1 }]
      };
    }
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),
  clearCart: () => set({ cart: [] })
}));

export default useStore;