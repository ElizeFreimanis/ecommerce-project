import styled from "styled-components";
import { FlexContainer } from "../Layout/FlexContainer";
import { MontserratTitle, MontserratParagraph } from "../Typography/Typography";
import Button from "../Button/Button";
import colors from "../../constants/colors";

export const Container = styled(FlexContainer)`
    flex-direction: column;
    text-align: center;
    width: 49%;
    position: relative;
    padding-bottom: 80px;

    &:nth-child(n + 3) {
        margin-top: 50px;
    }
`;

export const Image = styled.img`
    object-fit: contain;
`;

export const ProductInformation = styled(FlexContainer)`
    flex-direction: column;
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
    padding: 0 10px;
`;

export const ProductFooter = styled.div`
    position: absolute;
    width: 95%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1vh;
`;

export const Price = styled(MontserratParagraph)`
    font-size: 4vw;
    color: ${colors.darkBrown};
    font-weight: 600;
`;

export const ProductButton = styled(Button)`
    width: 100%;
    border: none;
    height: 50px;
    font-size: 3.9vw;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: ${colors.darkBeige};
    color: white;
    margin-top: 3px;
`;
