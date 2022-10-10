import styled from "styled-components";
import colors from "../../../constants/colors";
import { FlexContainer } from "../../Layout/FlexContainer";

export const Container = styled(FlexContainer)`
    justify-content: space-between;
    font-size: 25px;
    width: 70%;
    margin: auto;
`;

export const Link = styled.a`
    color: ${colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
`;
