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
      document.body.classList.add("no-scroll");

      return () => {
        window.removeEventListener("click", onClick);
        document.body.classList.remove("no-scroll");
      };
    }
  }, [menuOpen]);

  return (
    <S.Container>
      <S.MenuIcon onClick={toggle} />
      <S.Menu open={menuOpen}>
        <S.MenuContent id="menu" open={menuOpen}>
          <S.ClosingIcon onClick={toggle} />
          <S.LinkTo to="/">
            <S.MenuOptions>home</S.MenuOptions>
          </S.LinkTo>
          <S.MenuDivider />
          <S.LinkTo to="/products/news">
            <S.MenuOptions>news</S.MenuOptions>
          </S.LinkTo>
          <S.MenuDivider />
          <S.LinkTo to="/products/skincare">
            <S.MenuOptions>skincare</S.MenuOptions>
          </S.LinkTo>
          <S.MenuDivider />
          <S.LinkTo to="/products/makeup">
            <S.MenuOptions>makeup</S.MenuOptions>
          </S.LinkTo>
          <S.MenuDivider />
          <S.LinkTo to="/about">
            <S.MenuOptions>about</S.MenuOptions>
          </S.LinkTo>
          <S.MenuDivider />
          <MenuSocialMedia />
        </S.MenuContent>
      </S.Menu>
    </S.Container>
  );
}
