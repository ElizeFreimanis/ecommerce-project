import styled from "styled-components";
import colors from "../../constants/colors";
import Fonts from "../../constants/fonts";
import { FlexContainer } from "../Layout/FlexContainer";
import { Link } from "react-router-dom";

export const Container = styled(FlexContainer)`
    flex-direction: column;
    align-items: center;
    font-family: ${Fonts.firaSans};
    background-color: ${colors.darkBeige};
    height: 20%;
    color: ${colors.white};
    padding: 9% 5%;
`;

export const TextContainer = styled.div`
    font-size: 4.3vw;
    width: 100%;
    margin-top: 10px;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin-top: 10px;
    justify-content: space-between;
`;

export const ListItem = styled.li`
    margin: 5px;
`;

export const LinkTo = styled(Link)`
    text-decoration: none;
    color: ${colors.white};
`;
