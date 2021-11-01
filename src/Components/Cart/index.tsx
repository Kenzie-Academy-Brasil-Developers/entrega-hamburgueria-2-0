import { PopupBox, Box, CloseIcon } from "./styles";
import { useCart } from "../../Providers/CartProvider";

interface functions {
  showCart: () => void;
}

const Cart = ({ showCart }: functions) => {
  const { cart } = useCart();

  return (
    <PopupBox>
      <Box>
        <CloseIcon onClick={showCart} />
        {cart.length === 0 && (
          <div>
            <h1>Carrinho Vazio</h1>
            <p>Adicione algo para ver aqui</p>
          </div>
        )}
      </Box>
    </PopupBox>
  );
};

export default Cart;
