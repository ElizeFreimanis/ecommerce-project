import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
import colors from "../../constants/colors";

export const Container = styled.div``;

export const Icon = styled(FiShoppingBag)`
    font-size: 32px;
    color: ${colors.white};
    order: 4;
`;
