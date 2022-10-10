import * as S from "./styled";

export default function NewsLetter() {
    return (
        <S.Container>
            <S.Title>SUBSCRIBE TO OUR NEWSLETTER</S.Title>
            <S.Text>Enter your email below to get our newsletter with wonderful offers</S.Text>
            <S.Form>
                <S.Input type='text' placeholder='Your email' />
                <S.SubmitButton>SUBSCRIBE</S.SubmitButton>
            </S.Form>
        </S.Container>
    );
}
