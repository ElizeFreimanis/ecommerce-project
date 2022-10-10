import styled from "styled-components";
import { FlexContainer } from "../../components/Layout/FlexContainer";
import { MontserratTitle } from "../../components/Typography/Typography";
import colors from "../../constants/colors";

export const Container = styled.div`
    padding: 7vw 3vw 7vw 3vw;
`;

export const SpinnerContainer = styled.div`
    padding: 15px;
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
    justify-content: space-between;
`;
