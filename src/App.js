import { useEffect } from "react";
import * as S from "./styles";
import headers from "./apiConfig";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "./redux/actions";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        fetch("https://elizes-site.local/wp-json/wc/v3/products", { headers })
            .then((response) => response.json())
            .then((data) => dispatch(loadProducts(data)));
    }, [dispatch]);

    return (
        <>
            <S.GlobalStyle />
            <S.Container>
                <Header />
            </S.Container>
            <Outlet />
        </>
    );
}

export default App;
