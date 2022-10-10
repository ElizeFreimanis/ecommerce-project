import Product from "../../components/Product";
import * as S from "./styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Products({ title, category }) {
    const products = useSelector((state) => state.products);

    const selectedProducts = products.filter((item) => item.categories.find((obj) => obj.slug === category));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <S.Container>
            <S.Header>{title}</S.Header>
            <S.Content>
                {selectedProducts?.map((product) => (
                    <Product
                        key={product.id}
                        price={product.price}
                        name={product.name}
                        description={product.short_description}
                        img={product.images[0].src}
                    />
                ))}
            </S.Content>
        </S.Container>
    );
}
