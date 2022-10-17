import * as S from "./styled";
import FooterSocialMedia from "./FooterSocialMedia";
import NewsLetter from "../NewsLetter";

export default function Footer() {
    return (
        <S.Container>
            <FooterSocialMedia />
            <S.TextContainer>
                <S.List>
                    <S.LinkTo to='about'>
                        <S.ListItem>About CAIA</S.ListItem>
                    </S.LinkTo>
                    <S.LinkTo to='contact'>
                        <S.ListItem>Contact CAIA</S.ListItem>
                    </S.LinkTo>
                    <S.LinkTo to='sustainability'>
                        <S.ListItem>Sustainabity</S.ListItem>
                    </S.LinkTo>
                </S.List>
            </S.TextContainer>
            <NewsLetter />
        </S.Container>
    );
}
