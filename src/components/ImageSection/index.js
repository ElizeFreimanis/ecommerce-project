import * as S from "./styled";
import { Link } from "react-router-dom";

export default function ImageSection({ header, paragraph, image }) {
    return (
        <S.Container>
            <S.Image src={image} alt='makeup' />
            <S.Content>
                <S.Header>{header}</S.Header>
                <S.Paragraph>{paragraph}</S.Paragraph>
                <Link style={{ color: "white" }} to='products'>
                    <S.SectionButton>SHOP NOW</S.SectionButton>
                </Link>
            </S.Content>
        </S.Container>
    );
}
