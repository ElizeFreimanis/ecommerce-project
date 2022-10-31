import * as S from "./styled";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

export default function Product({ price, name, description, img, product }) {
    const dispatch = useDispatch();

    return (
        <S.Container>
            <S.Image alt='product' src={img} />
            <S.ProductInformation>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductDescription dangerouslySetInnerHTML={{ __html: description }} />
            </S.ProductInformation>
            <S.ProductFooter>
                <S.Price>{price} KR</S.Price>
                <S.ProductButton onClick={() => dispatch(addToCart(product))}>ADD TO BAG</S.ProductButton>
            </S.ProductFooter>
        </S.Container>
    );
}
