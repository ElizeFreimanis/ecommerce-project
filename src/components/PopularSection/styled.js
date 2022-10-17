import styled from "styled-components";
import { FiraSansParagraph, MontserratParagraph, MontserratTitle } from "../Typography/Typography";
import colors from "../../constants/colors";
import Button from "../Button/Button";

export const Container = styled.div`
    padding: 8vw 0 10vw 0;
    background-color: ${colors.white};
`;

export const Header = styled(MontserratTitle)`
    padding-left: 3vw;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const Content = styled.div`
    display: flex;
    overflow: scroll;
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

export const Image = styled.img`
    width: 40vw;
    height: 40vw;
    object-fit: contain;
`;

export const ProductName = styled(MontserratParagraph)`
    width: 40vw;
    padding-top: 1vw;
    font-weight: 600;
`;

export const Price = styled(FiraSansParagraph)`
    padding-top: 5px;
`;

export const ShopButton = styled(Button)`
    border: 2px solid ${colors.darkBrown};
    color: ${colors.darkBrown};
    margin: 2vw 5vw 0 5vw;
    padding: 1vw;
    font-weight: 600;
    font-size: 13px;
    /* position: absolute;
    bottom: 0; */
    width: 37vw;
    height: 35px;
`;
