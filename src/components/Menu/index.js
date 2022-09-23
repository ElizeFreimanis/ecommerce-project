import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { Divider } from "../Layout/Divider";
import { useLocation } from "react-router-dom";

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
                <S.MenuOptions>HOME</S.MenuOptions>
                <Divider />
                <S.MenuOptions>NEWS</S.MenuOptions>
                <Divider />
                <Link style={{ textDecoration: "none" }} to='/products'>
                    <S.MenuOptions>ALL PRODUCTS</S.MenuOptions>
                </Link>
                <Divider />
                <S.MenuOptions>SKINCARE</S.MenuOptions>
                <Divider />
                <S.MenuOptions>MAKEUP</S.MenuOptions>
                <Divider />
                <Link style={{ textDecoration: "none" }} to='/purpose'>
                    <S.MenuOptions>OUR VISION</S.MenuOptions>
                </Link>
                <Divider />
            </S.Menu>
        </S.Container>
    );
}
