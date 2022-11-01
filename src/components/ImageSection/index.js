import * as S from "./styled";

export default function ImageSection({ header, paragraph, image, link }) {
    return (
        <S.Container>
            <S.Image src={image} alt='makeup' />
            <S.Content>
                <S.Header>{header}</S.Header>
                <S.Paragraph>{paragraph}</S.Paragraph>
                <S.LinkTo to={link}>
                    <S.SectionButton>shop now</S.SectionButton>
                </S.LinkTo>
            </S.Content>
        </S.Container>
    );
}
