import styled from "styled-components";
import colors from "../../constants/colors";
import { Link } from "react-router-dom";
import { FlexContainer } from "../Layout/FlexContainer";

export const Container = styled(FlexContainer)`
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    padding: 6% 2%;
    justify-content: space-between;
    align-items: center;
    /* background-color: ${(props) => props.background && colors.lightBrown}; */
    /* background-color: ${colors.darkBeige}; */
    background: ${(props) => (props.background ? colors.darkBeige : "transparent")};
    height: 60px;
    transition: background 0.3s;
`;

export const FlexDiv = styled(FlexContainer)`
    align-items: center;
`;

export const Logo = styled(Link)`
    max-width: 25%;
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        width: 200px;
    }
`;
