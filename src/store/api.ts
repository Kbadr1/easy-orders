import { create } from 'zustand'

export const useProductsStore = create((set) => ({
  data: [],
  isLoading:false,
  fetch: async () => {     
    set({ isLoading: true }); 
    try {
      const response = await fetch(`https://api.easy-orders.net/api/v1/external-apps/products`, {
        headers: {
          'Api-Key': 'd900b7a6-5eea-4186-ae52-5f131969afb1',
        },
      });
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ isLoading: false }); 
    }
  },
}))
 