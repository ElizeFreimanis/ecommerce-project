import styled, { createGlobalStyle } from "styled-components";
import colors from "./constants/colors";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }

    body {
        height: 100%;
        background-color: ${colors.lightBeige};
        /* font-family: Source Serif Pro, serif; */
        font-family: 'Montserrat', sans-serif;
    }

    img {
        max-width: 100%;
    }
`;

export const Container = styled.div`
    padding-top: 60px;
`;
