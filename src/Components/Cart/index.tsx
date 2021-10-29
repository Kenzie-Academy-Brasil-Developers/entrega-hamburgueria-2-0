import { useCart } from "../../Providers/CartProvider";

const Cart = () => {
  const { removeFromCart } = useCart();
  return (
    <>
      <p>Cart</p>
      <button onClick={() => removeFromCart}>Deletar do Carrinho</button>
    </>
  );
};

export default Cart;
