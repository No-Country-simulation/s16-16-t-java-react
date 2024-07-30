import create from 'zustand';

const useStore = create((set) => ({
  products: [],
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
  clearCart: () => set({ cart: [] }),
  fetchProducts: async () => {
    try {
      const response = await fetch('https://spring-postgres-ds9s.onrender.com/productos');
      const data = await response.json();
      set({ products: data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}));

export default useStore;