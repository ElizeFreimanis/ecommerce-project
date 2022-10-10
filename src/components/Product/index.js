import * as S from "./styled";

export default function Product() {
    return (
        <S.Container>
            <S.Content>
                <S.Image alt='product' src='images/p2.jpg' />
                <S.ProductInformation>
                    <S.ProductInformationContent>
                        <S.ProductName>PRODUCT NAME</S.ProductName>
                        <S.ProductDescription>Setting spray</S.ProductDescription>
                        <S.Price>300 SEK</S.Price>
                    </S.ProductInformationContent>
                    <S.ProductButton>SHOP</S.ProductButton>
                </S.ProductInformation>
            </S.Content>
        </S.Container>
    );
}
