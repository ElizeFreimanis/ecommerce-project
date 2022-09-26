import * as S from "./styled";
import Menu from "../Menu";
import ShoppingCart from "../ShoppingCart";
import { useLocation } from "react-router-dom";
import SearchField from "../SearchField";
import FlexContainer from "../Layout/FlexContainer";

export default function Header() {
    const location = useLocation();

    return (
        <S.Container background={location.pathname !== "/"}>
            <S.Logo to='/'>
                <img alt='logo' src='.././images/Logo.jpg' />
            </S.Logo>
            <FlexContainer alignItems='center'>
                <Menu />
                <SearchField />
            </FlexContainer>
            <ShoppingCart />
        </S.Container>
    );
}
