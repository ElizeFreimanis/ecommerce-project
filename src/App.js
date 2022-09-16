import { useEffect } from "react";
import "./App.css";
import headers from "./apiConfig";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "./redux/actions";

function App() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        fetch("https://elizes-site.local/wp-json/wc/v3/products", { headers })
            .then((response) => response.json())
            .then((data) => dispatch(loadProducts(data)));
    }, [dispatch]);

    console.log(products);

    return (
        <div className='App'>
            <h1 dangerouslySetInnerHTML={{ __html: products?.[0].description }}></h1>
        </div>
    );
}

export default App;
