import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
`;

export const RedFont = styled.span`
  color: var(--secondary-color);
  font-size: 19px;
`;

export const InfoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 550px;
  width: 550px;
`;

export const InfoDisplay = styled.div`
  width: 350px;
  height: 75px;
  background-color: var(--grey-600);
  border-radius: 14px;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 550px;
  height: 550px;
  margin: 0 auto;
  border-radius: 15px;
`;
export const FormInput = styled.label`
  position: relative;
  margin-top: 10px;

  span {
    color: #ff1111;
    margin-left: 30px;
    font-weight: bold;
  }

  .placeholder {
    position: absolute;
    left: 0;
    top: 0;
    padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
    margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
    white-space: nowrap;
    transform: translate(0, 0);
    transform-origin: 0 0;
    color: #4f4e4c;
    background: white;
    transition: transform 120ms ease-in;
    font-weight: 600;
    font-size: 13px;
    line-height: 1.2;
    z-index: 2;
  }

  input {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid var(--grey-300);
    padding: calc(0.5rem * 1.5) 0.5rem;
    color: #4f4e4c;
    background: transparent;
    border-radius: 4px;

    &:focus,
    &:not(:placeholder-shown) {
      & + span {
        transform: translate(0.25rem, -65%) scale(0.8);
        color: #944913;
      }
    }
  }
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
