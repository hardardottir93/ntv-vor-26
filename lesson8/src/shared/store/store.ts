import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import type { CartItem } from "@/features/cart/types";
import { DEFAULT_PRODUCTS as products } from "@/features/products/Products";

export interface AppStore {
  items: CartItem[];
  addToCart: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;

  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const appStore = createStore<AppStore>()(
  devtools(
    subscribeWithSelector((set) => ({
      items: [],
      addToCart: (productId: string, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === productId);

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === productId
                  ? { ...i, quantity: i.quantity + quantity }
                  : i,
              ),
            };
          }

          const product = products.find((p) => p.id === productId);

          if (product) {
            return {
              items: [...state.items, { product, quantity }],
            };
          }

          return state;
        }),

      removeFromCart: (productId: string) =>
        set((state) => ({
          items: state.items.filter(
            (item: CartItem) => item.product.id !== productId,
          ),
        })),

      theme: "light",
      setTheme: (theme: "light" | "dark") => set({ theme }),
    })),
    { name: "appStore", store: "appStore" },
  ),
);

function useAppStore(): AppStore;
function useAppStore<T>(selector: (state: AppStore) => T): T;
function useAppStore<T>(selector?: (state: AppStore) => T): AppStore | T {
  return useStore(appStore, (selector ?? ((s) => s)) as (state: AppStore) => T);
}

export { appStore, useAppStore };
