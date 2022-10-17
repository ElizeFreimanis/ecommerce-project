import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Sustainability from "./pages/Sustainability/Sustainability";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Home />} />
                        <Route path='products/makeup' element={<Products title='Makeup' category='makeup' />} />
                        <Route path='products/news' element={<Products title='News' category='news' />} />
                        <Route path='products/skincare' element={<Products title='Skincare' category='skincare' />} />
                        <Route path='productpage' element={<ProductPage />} />
                        <Route path='about' element={<About />} />
                        <Route path='sustainability' element={<Sustainability />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
