import styled, { css } from "styled-components";
import { FiMail, FiPhone } from "react-icons/fi";
import { FlexContainer } from "../../components/Layout/FlexContainer";

const iconStyles = css`
    margin-right: 5px;
    font-size: 17.5px;
`;

export const Container = styled.div`
    padding: 2% 2% 4% 2%;
`;

export const Header = styled.h1`
    text-transform: uppercase;
    font-size: 7vw;
    font-weight: 600;
    letter-spacing: 1px;
    padding-bottom: 2%;
`;

export const Paragraph = styled.p`
    font-size: 14px;
`;

export const List = styled.ul`
    list-style: none;
    font-size: 14px;
    margin: 3% 0;
`;

export const ListItem = styled.li`
    line-height: 20px;
`;

export const ContactContainer = styled(FlexContainer)`
    align-items: center;
    margin-top: 1%;
`;

export const Mail = styled(FiMail)`
    ${iconStyles}
`;

export const Phone = styled(FiPhone)`
    ${iconStyles}
`;
