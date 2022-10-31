import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions";
import * as S from "./styled";

export default function CartProduct({ name, src, description, price, product }) {
    const dispatch = useDispatch();

    const removeProduct = (e) => {
        e.stopPropagation();
        dispatch(removeFromCart(product));
    };

    return (
        <S.Container>
            <S.Image alt='product image' src={src} />
            <S.InfoContainer>
                <S.Name>{name}</S.Name>
                <S.Description dangerouslySetInnerHTML={{ __html: description }}></S.Description>
                <S.Price>{price} kr</S.Price>
            </S.InfoContainer>
            <S.EditContainer>
                <S.AmountContainer>
                    <S.Minus />
                    <S.Amount>1</S.Amount>
                    <S.Plus />
                </S.AmountContainer>
                <S.Remove onClick={removeProduct} />
            </S.EditContainer>
        </S.Container>
    );
}
