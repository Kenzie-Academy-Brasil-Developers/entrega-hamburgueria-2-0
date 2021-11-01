import api from "../../Services/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  MainContent,
  Card,
  Button,
  ProductImage,
  AppBar,
  CartIcon,
  LogoutIcon,
  HomeLogo,
  SearchContainer,
  SearchInput,
} from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { BiLogInCircle } from "react-icons/bi";

interface Product {
  title: string;
  img: string;
  price: number;
  type: string;
}

const ProductsDashboard = () => {
  const [productsList, setProductsList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api
      .get("/hamburgers")
      // @ts-ignore
      .then((r: any) => setProductsList(r.data))
      .catch((e) => console.log(e));
  }, []);

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <AppBar>
        <HomeLogo onClick={() => history.push("/")}>
          Kenzie <span>Burger</span>
        </HomeLogo>
        <SearchContainer>
          <SearchInput placeholder="Pesquise" />
        </SearchContainer>
        <CartIcon>
          <FiShoppingCart />
        </CartIcon>
        <LogoutIcon onClick={logout}>
          <BiLogInCircle />
        </LogoutIcon>
      </AppBar>
      <MainContent>
        {productsList.map((product: Product, index) => {
          return (
            <Card key={index}>
              <ProductImage alt={product.title} src={product.img} />
              <p>{product.title}</p>
              <p>R${product.price},00</p>
              <p>{product.type}</p>
              <Button>ADD TO CART</Button>
            </Card>
          );
        })}
      </MainContent>
    </>
  );
};

export default ProductsDashboard;
