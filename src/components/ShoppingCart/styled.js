import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import colors from "../../constants/colors";
import Button from "../Button/Button";
import fonts from "../../constants/fonts";

export const Container = styled.div`
    width: 80%;
    position: fixed;
    right: 0;
    background-color: ${colors.white};
    height: 100vh;
    top: 0;
    padding: 10px;
    box-shadow: ${(props) => (props.open ? "1px 0px 300px black" : 0)};
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.35s;
    font-family: ${fonts.firaSans};
`;

export const Icon = styled(FiShoppingBag)`
    font-size: 27px;
    color: ${colors.white};
    order: 4;
`;

export const BottomSection = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
`;

export const Total = styled.h3`
    font-size: 20px;
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
