import * as S from "./styled";

export default function Product({ price, name, description, img }) {
    return (
        <S.Container>
            <S.Image alt='product' src={img} />
            <S.ProductInformation>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductDescription dangerouslySetInnerHTML={{ __html: description }} />
            </S.ProductInformation>
            <S.ProductFooter>
                <S.Price>{price} KR</S.Price>
                <S.ProductButton>ADD TO BAG</S.ProductButton>
            </S.ProductFooter>
        </S.Container>
    );
}
