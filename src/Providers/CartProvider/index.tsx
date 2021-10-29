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
  removeFromCart: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    const { title, price, img } = item;
    setCart([...cart, { title, price, img, quantity: 1 }]);
  };

  const removeFromCart = (item: Product) => {
    const newCart = cart.filter((product) => product.title !== item.title);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
