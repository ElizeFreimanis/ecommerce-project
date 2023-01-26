import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }

    body {
        height: 100%;
        font-family: 'Montserrat', sans-serif;
    }

    .no-scroll {
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }

    img {
        max-width: 100%;
        display: block;
    }
`;

export const Container = styled.div`
  padding-top: ${(props) => (props.paddingTop ? "60px" : 0)};
`;
