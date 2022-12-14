import styled from "styled-components";
import colors from "../../constants/colors";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export const Container = styled.div`
    padding: 8vw 0 10vw 0;
    background-color: ${colors.white};
`;

export const Header = styled.h1`
    padding-left: 3vw;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const Content = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 0 3vw;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    text-align: center;
    position: relative;
    padding-bottom: 70px;

    &:nth-child(n + 2) {
        margin-left: 4vw;
    }
`;

export const LinkTo = styled(Link)``;

export const Image = styled.img`
    width: 40vw;
    height: 40vw;
    object-fit: contain;
`;

export const ProductName = styled.p`
    width: 40vw;
    font-size: 12px;
    padding-top: 1vw;
    font-weight: 600;
`;

export const Price = styled.p`
    font-size: 12px;
    padding-top: 5px;
`;

export const BottomSection = styled.div`
    position: absolute;
    bottom: 0;
    height: 70px;
`;

export const ShopButton = styled(Button)`
    border: none;
    background-color: ${colors.darkBeige};
    color: white;
    margin-top: 2vw;
    padding: 1vw;
    font-weight: 600;
    font-size: 14px;
    width: 37vw;
    height: 40px;
    letter-spacing: 1px;
`;
