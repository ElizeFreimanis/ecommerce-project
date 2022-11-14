import * as S from "./styled.js";

export default function Contact() {
    return (
        <S.Container>
            <S.Header>Contact CAIA</S.Header>
            <S.Paragraph>CAIA works for you, so please don't even hesitate to get in touch with us!</S.Paragraph>
            <S.List>
                <S.ListItem style={{ fontWeight: 600 }}>CAIA AB</S.ListItem>
                <S.ListItem>Placeholderadress 12</S.ListItem>
                <S.ListItem>112 33 Stockholm</S.ListItem>
                <S.ListItem>Sweden</S.ListItem>
            </S.List>
            <S.ContactContainer>
                <S.Mail />
                <S.Paragraph>placeholderemail@caia.com</S.Paragraph>
            </S.ContactContainer>
            <S.ContactContainer>
                <S.Phone />
                <S.Paragraph>+46734 538 321</S.Paragraph>
            </S.ContactContainer>
        </S.Container>
    );
}
