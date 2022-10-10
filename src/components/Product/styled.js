import styled from "styled-components";
import { FlexContainer } from "../Layout/FlexContainer";
import { MontserratTitle, MontserratParagraph } from "../Typography/Typography";
import Button from "../Button/Button";
import colors from "../../constants/colors";

export const Container = styled.div`
    text-align: center;
    width: 47%;
    margin: 13px 5px 0 5px;
`;

export const Content = styled(FlexContainer)`
    flex-direction: column;
`;

export const Image = styled.img`
    height: 58vw;
    object-fit: contain;
`;

export const ProductInformation = styled(FlexContainer)`
    flex-direction: column;
    height: 47vw;
    position: relative;
`;

export const ProductName = styled(MontserratTitle)`
    font-size: 4vw;
    color: ${colors.darkBeige};
    font-weight: 600;
`;

export const ProductDescription = styled(MontserratParagraph)`
    margin-top: 1%;
    font-size: 3.5vw;
`;

export const Price = styled(MontserratParagraph)`
    font-size: 4vw;
    font-weight: 600;
    margin-top: 5%;
`;

export const ProductButton = styled(Button)`
    width: 100%;
    border: none;
    padding: 0 0;
    height: 12vw;
    font-size: 3.9vw;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: ${colors.darkBeige};
    color: white;
`;
