import * as S from "./styled";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

export default function Product({ price, name, description, img, product }) {
    const dispatch = useDispatch();

    return (
        <S.Wrapper>
            <S.LinkTo to='/productpage' state={product}>
                <S.Container>
                    <S.Image alt='product' src={img} />
                    <S.ProductInformation>
                        <S.ProductName>{name}</S.ProductName>
                        <S.ProductDescription dangerouslySetInnerHTML={{ __html: description }} />
                    </S.ProductInformation>
                    <S.ProductFooter>
                        <S.Price>{price} KR</S.Price>
                        <S.ProductButton onClick={() => dispatch(addToCart(product))}>add to bag</S.ProductButton>
                    </S.ProductFooter>
                </S.Container>
            </S.LinkTo>
        </S.Wrapper>
    );
}
