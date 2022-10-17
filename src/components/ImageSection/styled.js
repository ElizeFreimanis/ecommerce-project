import styled from "styled-components";
import { MontserratParagraph, MontserratTitle } from "../Typography/Typography";
import Button from "../Button/Button";
import colors from "../../constants/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: black;
    height: 250px;
    position: "relative";
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    position: absolute;
    z-index: 0;
    opacity: 0.6;
    height: 250px;
`;

export const Content = styled.div`
    padding: 10vw 0vw 12vw 8vw;
    z-index: 1;
    position: relative;
    color: white;
    height: 100%;
`;

export const Header = styled(MontserratTitle)`
    font-size: 40px;
    font-weight: 500;
`;

export const Paragraph = styled(MontserratParagraph)`
    padding-left: 2px;
`;

export const LinkTo = styled(Link)`
    color: ${colors.white};
`;

export const SectionButton = styled(Button)`
    position: absolute;
    bottom: 10vw;
    right: 25%;
    width: 50%;
`;
