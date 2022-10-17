import * as S from "./styled";

export default function TextSection({ header, children, src }) {
    return (
        <>
            <S.Container>
                <S.Header>{header}</S.Header>
                <S.Text>{children}</S.Text>
            </S.Container>
            <S.Image alt='content img' src={src} />
        </>
    );
}
