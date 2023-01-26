import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import colors from "../../constants/colors";
import Button from "../Button/Button";
import fonts from "../../constants/fonts";
import { Divider } from "../Layout/Divider";

export const Container = styled.div`
  position: relative;
`;

export const Icon = styled(FiShoppingBag)`
  font-size: 27px;
  color: ${colors.white};
  order: 4;
`;

export const Cart = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.35s;
  z-index: ${(props) => (props.open ? 1 : 0)};
`;

export const CartContent = styled.div`
  text-align: center;
  width: 75vw;
  height: 100vh;
  position: absolute;
  right: 0;
  background-color: ${colors.white};
  box-shadow: ${(props) => (props.open ? "1px 0px 300px black" : 0)};
  top: 0;
  padding: 10px 5px;
  font-family: ${fonts.firaSans};
`;

export const MenuItems = styled.div`
  overflow: scroll;
  height: 80%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyText = styled.h4`
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  margin-top: 10%;
`;

export const BottomSection = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Total = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.darkBrown};
`;

export const CheckoutButton = styled(Button)`
  background-color: ${colors.lightBrown};
  color: ${colors.white};
  width: 240px;
  height: 50px;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const ProductDivider = styled(Divider)`
  background-color: darkgrey;
  width: 100%;
`;
