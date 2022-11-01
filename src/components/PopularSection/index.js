import * as S from "./styled";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

export default function PopularSection({ products }) {
    const dispatch = useDispatch();

    return (
        <S.Container>
            <S.Header>Popular</S.Header>
            <S.Content>
                {products?.map((product) => (
                    <S.Product key={product.id}>
                        <S.LinkTo to='productpage' state={product}>
                            <S.Image alt='product' src={product.images[0].src} />
                        </S.LinkTo>
                        <S.ProductName>{product.name}</S.ProductName>
                        <S.BottomSection>
                            <S.Price>{product.price} SEK</S.Price>
                            <S.ShopButton onClick={() => dispatch(addToCart(product))}>BUY NOW</S.ShopButton>
                        </S.BottomSection>
                    </S.Product>
                ))}
            </S.Content>
        </S.Container>
    );
}
