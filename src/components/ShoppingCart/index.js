import * as S from "./styled";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

export default function ShoppingCart() {
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
    const location = useLocation();
    const products = useSelector((state) => state.cartProducts);

    useEffect(() => {
        setShoppingCartOpen(false);
    }, [location]);

    const toggle = (e) => {
        e.stopPropagation();
        setShoppingCartOpen(!shoppingCartOpen);
    };

    useEffect(() => {
        if (products.length > 0) {
            setShoppingCartOpen(true);
        }
    }, [products]);

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

    const totalPrice = products.reduce((total, item) => total + Number(item.price), 0);

    const cartProductsObject = products.reduce(
        (object, product) => ({
            ...object,
            [product.id]: object[product.id] ? [...object[product.id], product] : [product],
        }),
        {}
    );

    const productsArray = Object.values(cartProductsObject);

    return (
        <S.Container>
            <S.Icon onClick={toggle} />
            <S.Content id='shoppingCart' open={shoppingCartOpen}>
                {productsArray.length > 0 ? (
                    productsArray?.map((products, index) => (
                        <div key={index}>
                            <CartProduct
                                src={products[0].images[0].src}
                                name={products[0].name}
                                description={products[0].short_description}
                                price={products[0].price}
                                products={products}
                            />
                            <S.ProductDivider />
                        </div>
                    ))
                ) : (
                    <S.EmptyText>Your shopping cart is empty!</S.EmptyText>
                )}
                <S.BottomSection>
                    <S.Total>Total: {totalPrice} SEK</S.Total>
                    <S.CheckoutButton>checkout</S.CheckoutButton>
                </S.BottomSection>
            </S.Content>
        </S.Container>
    );
}
