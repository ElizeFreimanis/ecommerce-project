import styled from "styled-components";
import colors from "../../../constants/colors";
import { FlexContainer } from "../../Layout/FlexContainer";

export const Container = styled(FlexContainer)`
    justify-content: space-between;
    padding-top: 50px;
    font-size: 25px;
    width: 40%;
    margin: auto;
`;

export const Link = styled.a`
    color: ${colors.white};
`;
