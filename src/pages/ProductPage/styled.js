import styled, { css } from "styled-components";
import { FlexContainer } from "../../components/Layout/FlexContainer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import colors from "../../constants/colors";
import Button from "../../components/Button/Button";

const iconStyles = css`
    position: absolute;
    top: 49%;
    font-size: 22px;
    color: ${colors.darkBrown};

    /* 
    &:hover {
        background-color: lightgray;
        transform: background-color;
        transition: transform 0.5s;
    } */
`;

export const Container = styled.div`
    text-align: center;
`;

export const ImageContainer = styled.div`
    position: relative;
`;

export const LeftArrow = styled(FiChevronLeft)`
    ${iconStyles}
    left: 10px;
`;

export const RightArrow = styled(FiChevronRight)`
    ${iconStyles}
    right: 10px;
`;

export const LargeImage = styled.img`
    width: 95%;
    margin: 3% auto;
`;

export const ImagesContainer = styled(FlexContainer)`
    overflow: scroll;
    padding-bottom: 3%;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const SmallImage = styled.img`
    width: 80px;

    &:nth-child(n + 1) {
        margin-right: 3%;
    }
`;

export const Name = styled.h2`
    font-weight: 600;
    letter-spacing: 1px;
`;

export const Price = styled.h2`
    font-weight: 600;
    letter-spacing: 1px;
`;

export const PurchaseButton = styled(Button)`
    background-color: ${colors.lightBrown};
`;
