import styled from "styled-components";
import fonts from "../../constants/fonts";

export const Button = styled.button`
    font-family: ${fonts.montserrat};
    border: 2px solid white;
    padding: 10px;
    font-weight: 500;
    text-align: center;
    font-size: 17px;
    background: transparent;
    color: inherit;
`;

export default Button;
