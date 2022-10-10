import styled from "styled-components";
import { FlexContainer } from "../../components/Layout/FlexContainer";
import { MontserratTitle } from "../../components/Typography/Typography";
import colors from "../../constants/colors";

export const Container = styled.div`
    padding-top: 7vw;
`;

export const Header = styled(MontserratTitle)`
    color: ${colors.darkBrown};
    text-align: center;
    font-size: 7vw;
    font-weight: 600;
    text-transform: uppercase;
`;

export const Content = styled(FlexContainer)`
    flex-wrap: wrap;
    justify-content: center;
`;
