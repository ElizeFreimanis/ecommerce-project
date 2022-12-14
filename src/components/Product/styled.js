import styled from "styled-components";
import { FlexContainer } from "../Layout/FlexContainer";
import Button from "../Button/Button";
import colors from "../../constants/colors";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    width: 49%;
    margin-top: 12%;
`;

export const LinkTo = styled(Link)`
    text-decoration: none;
`;

export const Container = styled(FlexContainer)`
    flex-direction: column;
    text-align: center;
    position: relative;
    padding-bottom: 90px;

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

export const ProductName = styled.h1`
    font-size: 4vw;
    color: ${colors.darkBeige};
    font-weight: 600;
    padding: 0 10px;
    height: 40px;
`;

export const ProductDescription = styled.p`
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

export const Price = styled.p`
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
    margin-top: 5px;
`;
