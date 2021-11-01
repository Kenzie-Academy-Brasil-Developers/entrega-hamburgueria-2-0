import styled from "styled-components";

export const AppBar = styled.nav`
  background-color: var(--primary-color);
  width: 100vw;
  height: 3.5rem;
`;

export const HomeLogo = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  cursor: pointer;

  span {
    color: var(--secondary-color);
    font-size: 1.3rem;
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  left: 40%;
  top: 10px;
`;

export const SearchInput = styled.input`
  padding: 10px 20px;
  width: 300px;
  outline: none;
  border-radius: 5px;
  border: none;
`;

export const CartIcon = styled.section`
  position: absolute;
  right: 95px;
  top: 15px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const LogoutIcon = styled.section`
  position: absolute;
  right: 25px;
  top: 15px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 12px;
  background-color: var(--grey-100);
  margin-left: 1rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 12px;
  padding: 10px 50px;
  border: none;
  margin-top: 10px;
  background-color: var(--primary-color);
  color: white;
`;

export const ProductImage = styled.img`
  width: 130px;
  height: 120px;
`;
