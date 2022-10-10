import * as S from "./styled";

export default function Product({ price, name, description, img }) {
    return (
        <S.Container>
            <S.Content>
                <S.Image alt='product' src={img} />
                <S.ProductInformation>
                    <S.ProductInformationContent>
                        <S.ProductName>{name}</S.ProductName>
                        <S.ProductDescription dangerouslySetInnerHTML={{ __html: description }} />
                        <S.Price>{price}</S.Price>
                    </S.ProductInformationContent>
                    <S.ProductButton>SHOP</S.ProductButton>
                </S.ProductInformation>
            </S.Content>
        </S.Container>
    );
}
