import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../types/Product";

interface CartContextType {
  cart: Product[];
  toggleCart: (product: Product) => void;
  isInCart: (id: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const toggleCart = (product: Product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return [...prevCart, product];
      }
    });
  };

  const isInCart = (id: number) => {
    return cart.some((product) => product.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, toggleCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
