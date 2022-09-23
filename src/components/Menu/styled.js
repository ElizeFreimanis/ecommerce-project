import styled from "styled-components";
import fonts from "../../constants/fonts";
import { FiAlignJustify, FiX } from "react-icons/fi";
import colors from "../../constants/colors";

export const Container = styled.div`
    color: white;
    order: 1;
    display: flex;
    align-items: center;
`;

export const MenuIcon = styled(FiAlignJustify)`
    font-size: 35px;
`;

export const Menu = styled.ul`
    text-align: center;
    list-style: none;
    font-weight: 700;
    font-family: ${fonts.montserrat};
    font-size: 18px;
    position: absolute;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.5s;
    background-color: ${colors.lightBeige};
    height: 100vh;
    position: absolute;
    top: 0;
    width: 75%;
    color: ${colors.black};
    left: 0;
    padding-top: 10%;

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

export const MenuOptions = styled.li`
    margin: 7%;
    color: ${colors.black};
`;
