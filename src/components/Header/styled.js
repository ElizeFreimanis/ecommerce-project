import styled from "styled-components";
import colors from "../../constants/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    padding: 3% 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: ${(props) => props.background && colors.lightBrown}; */
    background-color: ${colors.darkBeige};
    height: 60px;
`;

export const Logo = styled(Link)`
    max-width: 30%;
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
