import styled from "styled-components";
import colors from "../../constants/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
    text-align: center;
    position: relative;
    z-index: 1;
    padding: 3% 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.background && colors.lightBrown};
`;

export const Logo = styled(Link)`
    max-width: 30%;
    order: 3;
    display: flex;
    align-items: center;

    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        width: 200px;
    }
`;
