import { useState, useEffect } from "react";
import * as S from "./styled";
import { useLocation } from "react-router-dom";
import MenuSocialMedia from "./MenuSocialMedia";

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const toggle = (e) => {
        e.stopPropagation();
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            const onClick = (e) => {
                if (!document.getElementById("menu").contains(e.target)) {
                    setMenuOpen(false);
                }
            };

            window.addEventListener("click", onClick);

            return () => {
                window.removeEventListener("click", onClick);
            };
        }
    }, [menuOpen]);

    return (
        <S.Container>
            <S.MenuIcon onClick={toggle} />
            <S.Menu id='menu' open={menuOpen}>
                <S.ClosingIcon onClick={toggle} />
                <S.LinkTo to='/'>
                    <S.MenuOptions>HOME</S.MenuOptions>
                </S.LinkTo>
                <S.MenuDivider />
                <S.LinkTo to='/products/news'>
                    <S.MenuOptions>NEWS</S.MenuOptions>
                </S.LinkTo>
                <S.MenuDivider />
                <S.LinkTo to='/products/skincare'>
                    <S.MenuOptions>SKINCARE</S.MenuOptions>
                </S.LinkTo>
                <S.MenuDivider />
                <S.LinkTo to='/products/makeup'>
                    <S.MenuOptions>MAKEUP</S.MenuOptions>
                </S.LinkTo>
                <S.MenuDivider />
                <S.LinkTo to='/purpose'>
                    <S.MenuOptions>OUR VISION</S.MenuOptions>
                </S.LinkTo>
                <S.MenuDivider />
                <MenuSocialMedia />
            </S.Menu>
        </S.Container>
    );
}
