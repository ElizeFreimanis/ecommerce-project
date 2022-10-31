import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
    padding: 5% 2%;
    color: ${colors.darkGrey};
`;

export const Header = styled.h1`
    text-transform: uppercase;
    font-size: 18px;
    padding-bottom: 10px;
    letter-spacing: 1px;
`;

export const Text = styled.p`
    font-size: 13.5px;
    letter-spacing: 1px;
`;

export const Image = styled.img`
    width: 100%;
`;
