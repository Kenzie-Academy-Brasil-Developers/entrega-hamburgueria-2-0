import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const RedFont = styled.span`
  color: var(--secondary-color);
  font-size: 19px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  animation: changecolors 5s ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:hover {
    background-color: var(--secondary-color);
  }

  @keyframes changecolors {
    from {
      background-color: var(--primary-color);
    }

    to {
      background-color: var(--secondary-color);
    }
  }
`;
