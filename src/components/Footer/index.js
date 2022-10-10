import * as S from "./styled";
import FooterSocialMedia from "./FooterSocialMedia";
import NewsLetter from "../NewsLetter";

export default function Footer() {
    return (
        <S.Container>
            <FooterSocialMedia />
            <S.TextContainer>
                <S.List>
                    <S.ListItem>About CAIA</S.ListItem>
                    <S.ListItem>Contact CAIA</S.ListItem>
                    <S.ListItem>Sustainabity</S.ListItem>
                </S.List>
            </S.TextContainer>
            <NewsLetter />
        </S.Container>
    );
}
