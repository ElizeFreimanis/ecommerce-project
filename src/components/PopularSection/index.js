import * as S from "./styled";

export default function PopularSection({ products }) {
    return (
        <S.Container>
            <S.Header>Popular</S.Header>
            <S.Content>
                {products?.map((product) => (
                    <S.Product>
                        <S.Image alt='product' src={product.images[0].src} />
                        <S.ProductName>{product.name}</S.ProductName>
                        <div style={{ position: "absolute", bottom: 0, height: 70 }}>
                            <S.Price>{product.price} SEK</S.Price>
                            <S.ShopButton>BUY NOW</S.ShopButton>
                        </div>
                    </S.Product>
                ))}
            </S.Content>
        </S.Container>
    );
}
