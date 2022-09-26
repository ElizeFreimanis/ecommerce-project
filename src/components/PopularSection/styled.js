import styled from "styled-components";
import { SourceSerifParagraph, MontserratParagraph, MontserratTitle } from "../Typography/Typography";
import colors from "../../constants/colors";
import Button from "../Button/Button";
import fonts from "../../constants/fonts";

export const Container = styled.div`
    padding: 10vw 0 10vw 0;
    color: ${colors.darkBrown};
    background-color: ${colors.white};
`;

export const Header = styled(MontserratTitle)`
    padding: 0 0 2vw 3vw;
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
    flex-shrink: 0;
    text-align: center;

    &:nth-child(n + 2) {
        margin-left: 4vw;
    }
`;

export const Image = styled.img`
    width: 40vw;
    height: 40vw;
    object-fit: cover;
`;

export const ProductName = styled(MontserratParagraph)`
    padding-top: 1vw;
    font-weight: 500;
`;

export const Price = styled(SourceSerifParagraph)``;

export const ShopButton = styled(Button)`
    border: 1px solid ${colors.darkBrown};
    margin: 1vw 5vw;
    padding: 1vw;
    font-weight: 400;
    font-size: 13px;
`;
