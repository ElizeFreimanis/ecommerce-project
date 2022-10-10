import styled from "styled-components";
import colors from "../../constants/colors";
import { FlexContainer } from "../Layout/FlexContainer";
import Button from "../Button/Button";
import Fonts from "../../constants/fonts";

export const Container = styled(FlexContainer)`
    font-family: ${Fonts.montserrat};
    padding-top: 8px;
    flex-direction: column;
`;

export const SubmitButton = styled(Button)`
    margin-left: 5px;
    font-size: 4vw;
`;

export const Title = styled.h1`
    font-size: 5vw;
    font-weight: 600;
    line-height: 6vw;
    margin-top: 20px;
`;

export const Text = styled.p`
    font-size: 4vw;
    line-height: 5.3vw;
`;

export const Form = styled(FlexContainer)`
    padding-top: 15px;
`;

export const Input = styled.input`
    border: 2px solid white;
    background: transparent;
    padding: 5px;
    color: ${colors.white};
    width: 65%;

    ::placeholder {
        color: ${colors.white};
        font-family: ${Fonts.montserrat};
    }

    &:focus {
        outline: none;
    }
`;
