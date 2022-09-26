import styled from "styled-components";
import { MontserratParagraph } from "../../components/Typography/Typography";
import { Divider } from "../../components/Layout/Divider";
import colors from "../../constants/colors";

export const Container = styled.div``;

export const HeaderImage = styled.img`
    z-index: 0;
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;

export const InfoText = styled(MontserratParagraph)`
    font-size: 14px;
    padding: 0 0 30px 0;
    color: ${colors.darkBrown};
`;

export const InfoTextContainer = styled.div`
    padding: 50px;
    text-align: center;
`;

export const TextDivider = styled(Divider)`
    background-color: ${colors.brown};
    width: 100px;
`;
