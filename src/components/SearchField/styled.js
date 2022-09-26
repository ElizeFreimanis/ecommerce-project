import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import colors from "../../constants/colors";

export const Container = styled.div`
    order: 2;
    margin-left: 9%;
    margin-top: 3.5%;
`;

export const SearchIcon = styled(FiSearch)`
    order: 2;
    color: ${colors.white};
    display: flex;
    align-items: center;
    font-size: 29px;
`;
