import Product from "../../components/Product";
import * as S from "./styled";
import { useEffect } from "react";

export default function Products() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <S.Container>
            <S.Header>PRODUCTS</S.Header>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </S.Container>
    );
}
