import styled from "styled-components";
import { FlexContainer } from "../Layout/FlexContainer";
import { MontserratTitle, MontserratParagraph } from "../Typography/Typography";
import Button from "../Button/Button";
import colors from "../../constants/colors";

export const Container = styled.div`
    text-align: center;
    width: 41%;
    margin: 0 4.5% 4.5% 4.5%;
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

export const ProductInformationContent = styled.div`
    padding: 6%;
`;

export const ProductName = styled(MontserratTitle)`
    font-size: 5.6vw;
    color: ${colors.darkBeige};
    font-weight: 600;
`;

export const ProductDescription = styled(MontserratParagraph)`
    margin-top: 1%;
    font-size: 11px;
`;

export const Price = styled(MontserratParagraph)`
    font-weight: 600;
    margin-top: 5%;
`;

export const ProductButton = styled(Button)`
    width: 100%;
    border: none;
    padding: 0 0;
    height: 14vw;
    background-color: ${colors.darkBeige};
    color: white;
    position: absolute;
    bottom: 0;
`;
