import { useEffect } from "react";
import * as S from "./styled";
import headers from "./apiConfig";
import { useDispatch } from "react-redux";
import { loadProducts } from "./redux/actions";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    fetch("https://elizes-site.local/wp-json/wc/v3/products?per_page=100", {
      headers,
    })
      .then((response) => response.json())
      .then((data) => dispatch(loadProducts(data)))
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <>
      <S.GlobalStyle />
      <S.Container paddingTop={location.pathname !== "/"}>
        <Header />
        <Outlet />
        <Footer />
      </S.Container>
    </>
  );
}

export default App;
