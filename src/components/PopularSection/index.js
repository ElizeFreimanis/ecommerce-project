import * as S from "./styled";

export default function PopularSection() {
    return (
        <S.Container>
            <S.Header>Popular</S.Header>
            <S.Content>
                <S.Product>
                    <S.Image alt='product' src='/images/p1.jpg' />
                    <S.ProductName>PRODUCT NAME</S.ProductName>
                    <S.Price>500 SEK</S.Price>
                    <S.ShopButton>BUY NOW</S.ShopButton>
                </S.Product>
                <S.Product>
                    <S.Image alt='product' src='/images/p1.jpg' />
                    <S.ProductName>PRODUCT NAME</S.ProductName>
                    <S.Price>500 SEK</S.Price>
                    <S.ShopButton>BUY NOW</S.ShopButton>
                </S.Product>
                <S.Product>
                    <S.Image alt='product' src='/images/p1.jpg' />
                    <S.ProductName>PRODUCT NAME</S.ProductName>
                    <S.Price>500 SEK</S.Price>
                    <S.ShopButton>BUY NOW</S.ShopButton>
                </S.Product>
                <S.Product>
                    <S.Image alt='product' src='/images/p1.jpg' />
                    <S.ProductName>PRODUCT NAME</S.ProductName>
                    <S.Price>500 SEK</S.Price>
                    <S.ShopButton>BUY NOW</S.ShopButton>
                </S.Product>
            </S.Content>
        </S.Container>
    );
}
