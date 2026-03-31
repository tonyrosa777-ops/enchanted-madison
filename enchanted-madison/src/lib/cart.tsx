"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  selectedSize?: string;
  selectedColor?: string;
  printful_variant_id?: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) setItems(JSON.parse(stored) as CartItem[]);
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.id === item.id &&
          i.selectedSize === item.selectedSize &&
          i.selectedColor === item.selectedColor
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id &&
          i.selectedSize === item.selectedSize &&
          i.selectedColor === item.selectedColor
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string | number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string | number, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
