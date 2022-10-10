import styled from "styled-components";
import fonts from "../../constants/fonts";
import { FiAlignJustify, FiX } from "react-icons/fi";
import colors from "../../constants/colors";
import { Link } from "react-router-dom";
import { Divider } from "../Layout/Divider";
import { FlexContainer } from "../Layout/FlexContainer";

export const Container = styled(FlexContainer)`
    color: white;
    order: 1;
    align-items: center;
`;

export const MenuIcon = styled(FiAlignJustify)`
    font-size: 35px;
`;

export const Menu = styled.ul`
    text-align: center;
    list-style: none;
    font-weight: 500;
    font-family: ${fonts.montserrat};
    font-size: 18px;
    position: fixed;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.35s;
    background-color: ${colors.darkBeige};
    height: 100vh;
    top: 0;
    width: 75%;
    left: 0;
    padding-top: 10%;
    box-shadow: ${(props) => (props.open ? "1px 0px 300px black" : 0)};

    @media (min-width: 768px) {
        margin: 20px auto;
        display: flex;
        width: 80%;
        justify-content: space-between;
    }
`;

export const ClosingIcon = styled(FiX)`
    font-size: 20px;
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
`;

export const LinkTo = styled(Link)`
    text-decoration: none;
`;

export const MenuOptions = styled.li`
    margin: 9%;
    color: ${colors.white};
`;

export const MenuDivider = styled(Divider)`
    background-color: ${colors.white};
`;
