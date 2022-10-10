import Product from "../../components/Product";
import * as S from "./styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import colors from "../../constants/colors";

export default function Products({ title, category }) {
    const products = useSelector((state) => state.products);

    const selectedProducts = products.filter((item) => item.categories.find((obj) => obj.slug === category));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log(products);

    return (
        <S.Container>
            <S.Header>{title}</S.Header>
            <S.Content>
                {products.length === 0 ? (
                    <S.SpinnerContainer>
                        <ClipLoader color={colors.darkBrown} />
                    </S.SpinnerContainer>
                ) : (
                    selectedProducts?.map((product) => (
                        <Product
                            key={product.id}
                            price={product.price}
                            name={product.name}
                            description={product.short_description}
                            img={product.images[0].src}
                        />
                    ))
                )}
            </S.Content>
        </S.Container>
    );
}
