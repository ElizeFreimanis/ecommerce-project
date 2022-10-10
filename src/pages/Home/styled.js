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
    backface-visibility: hidden;
`;

export const InfoText = styled(MontserratParagraph)`
    font-size: 12px;
    padding: 0 0 30px 0;
    color: ${colors.darkBrown};
`;

export const InfoTextContainer = styled.div`
    padding: 50px;
    text-align: center;
    background-color: ${colors.lightBeige};
`;

export const TextDivider = styled(Divider)`
    background-color: ${colors.brown};
    width: 100px;
`;
