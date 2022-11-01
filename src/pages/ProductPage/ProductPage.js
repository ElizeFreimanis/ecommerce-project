import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styled";

export default function ProductPage() {
    const location = useLocation();
    const product = location.state;
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(product);

    const images = product.images;

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <S.Container>
            <S.ImageContainer>
                <S.LargeImage src={product.images[currentIndex].src} alt='product' />
                <S.LeftArrow onClick={goToPrevious} />
                <S.RightArrow onClick={goToNext} />
            </S.ImageContainer>
            <S.ImagesContainer>
                {images.map((image, index) => (
                    <S.SmallImage key={index} src={image.src} alt='product' onClick={() => setCurrentIndex(index)} />
                ))}
            </S.ImagesContainer>
            <S.Name>{product.name}</S.Name>
            <S.Price>{product.price} kr</S.Price>
            <S.PurchaseButton>add to cart</S.PurchaseButton>
        </S.Container>
    );
}
