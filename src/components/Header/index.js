import * as S from "./styled";
import Menu from "../Menu";
import ShoppingCart from "../ShoppingCart";
import { useLocation } from "react-router-dom";
import SearchField from "../SearchField";
import { useState } from "react";

export default function Header() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    window.onscroll = function (event) {
        var scroll = window.pageYOffset;

        if (scroll > 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <S.Container background={location.pathname !== "/" || scrolled}>
            <S.Logo to='/'>
                <img alt='logo' src='.././images/Logo.jpg' />
            </S.Logo>
            <S.FlexDiv>
                <Menu />
                <SearchField />
            </S.FlexDiv>
            <ShoppingCart />
        </S.Container>
    );
}
