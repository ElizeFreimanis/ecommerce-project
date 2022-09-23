import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }
`;

export const Container = styled.div`
    background-color: #f5f5f5;
`;
