import styled from "styled-components";
import { FlexContainer } from "../../components/Layout/FlexContainer";
import { MontserratTitle } from "../../components/Typography/Typography";

export const Container = styled.div`
    padding-top: 7vw;
`;

export const Header = styled(MontserratTitle)`
    text-align: center;
    font-size: 9vw;
    font-weight: 500;
    text-transform: uppercase;
`;

export const Content = styled(FlexContainer)`
    flex-wrap: wrap;
    justify-content: center;
`;
