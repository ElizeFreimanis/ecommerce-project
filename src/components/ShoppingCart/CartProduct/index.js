import { useDispatch } from "react-redux";
import { removeFromCart, removeAllFromCart, addToCart } from "../../../redux/actions";
import * as S from "./styled";

export default function CartProduct({ name, src, description, price, products }) {
    const dispatch = useDispatch();

    const removeOne = (e) => {
        e.stopPropagation();
        dispatch(removeFromCart(products[0]));
    };

    const removeAll = (e) => {
        e.stopPropagation();
        dispatch(removeAllFromCart(products[0].id));
    };

    const addOne = (e) => {
        e.stopPropagation();
        dispatch(addToCart(products[0]));
    };

    return (
        <S.Container>
            <S.Image alt='product image' src={src} />
            <S.InfoContainer>
                <S.Name>{name}</S.Name>
                <S.Description dangerouslySetInnerHTML={{ __html: description }}></S.Description>
                <S.Price>{price} SEK</S.Price>
            </S.InfoContainer>
            <S.EditContainer>
                <S.AmountContainer>
                    <S.Minus onClick={removeOne} />
                    <S.Amount>{products.length}</S.Amount>
                    <S.Plus onClick={addOne} />
                </S.AmountContainer>
                <S.Remove onClick={removeAll} />
            </S.EditContainer>
        </S.Container>
    );
}
