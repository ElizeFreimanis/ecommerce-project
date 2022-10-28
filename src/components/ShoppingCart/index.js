import * as S from "./styled";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ShoppingCart() {
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShoppingCartOpen(false);
    }, [location]);

    const toggle = (e) => {
        e.stopPropagation();
        setShoppingCartOpen(!shoppingCartOpen);
    };

    useEffect(() => {
        if (shoppingCartOpen) {
            const onClick = (e) => {
                if (!document.getElementById("shoppingCart").contains(e.target)) {
                    setShoppingCartOpen(false);
                }
            };

            window.addEventListener("click", onClick);

            return () => {
                window.removeEventListener("click", onClick);
            };
        }
    }, [shoppingCartOpen]);

    //använd reduce funktionen till att lägga ihop alla priser (?)

    return (
        <div>
            <S.Icon onClick={toggle} />
            <S.Container id='shoppingCart' open={shoppingCartOpen}>
                <h2 style={{ textAlign: "left" }}>Jag är en produkt</h2>
                <h2 style={{ textAlign: "left" }}>Jag är en produkt</h2>
                <h2 style={{ textAlign: "left" }}>Jag är en produkt</h2>
                <h2 style={{ textAlign: "left" }}>Jag är en produkt</h2>
                <S.BottomSection>
                    <S.Total>Total: 350 kr</S.Total>
                    <S.CheckoutButton>checkout</S.CheckoutButton>
                </S.BottomSection>
            </S.Container>
        </div>
    );
}
