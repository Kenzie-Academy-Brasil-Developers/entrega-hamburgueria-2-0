import { createContext, ReactNode, useContext, useState } from "react";

interface CartProps {
  children: ReactNode;
}

interface Product {
  title: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartProviderData {
  cart: Product[];
  addToCart: (product: Product) => void;
  deleteCart: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    const { title, price, img } = item;
    setCart([...cart, { title, price, img, quantity: 1 }]);
  };

  const deleteCart = (item: Product) => {};

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
