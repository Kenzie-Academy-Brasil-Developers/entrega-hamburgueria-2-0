import { ReactNode } from "react";
import { CartProvider } from "./CartProvider";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <CartProvider>{children}</CartProvider>;
};

export default AppProvider;
