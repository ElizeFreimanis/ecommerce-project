import styled from "styled-components";
import { FlexContainer } from "../Layout/FlexContainer";
import { MontserratTitle, MontserratParagraph } from "../Typography/Typography";
import Button from "../Button/Button";
import colors from "../../constants/colors";

export const Container = styled.div`
    text-align: center;
    width: 49%;
`;

export const Content = styled(FlexContainer)`
    flex-direction: column;
`;

export const Image = styled.img`
    object-fit: contain;
`;

export const ProductInformation = styled(FlexContainer)`
    flex-direction: column;
    height: 37vw;
    position: relative;
`;

export const ProductName = styled(MontserratTitle)`
    font-size: 4vw;
    color: ${colors.darkBeige};
    font-weight: 600;
    padding: 0 10px;
    height: 40px;
`;

export const ProductDescription = styled(MontserratParagraph)`
    margin-top: 1%;
    font-size: 3.5vw;
    color: ${colors.darkBrown};
`;

export const Price = styled(MontserratParagraph)`
    font-size: 4vw;
    color: ${colors.darkBrown};
    font-weight: 600;
    margin-top: 5%;
`;

export const ProductButton = styled(Button)`
    width: 100%;
    border: none;
    height: 12vw;
    font-size: 3.9vw;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: ${colors.darkBeige};
    color: white;
    position: absolute;
    bottom: 0;
`;
