import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../redux/actions";
import * as S from "./styled";

export default function ProductPage() {
  const location = useLocation();
  const product = location.state;
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const images = product.images;

  useEffect(() => {
    document.title = product.name;
  }, []);

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
        <S.LargeImage src={product.images[currentIndex].src} alt="product" />
        <S.LeftArrow onClick={goToPrevious} />
        <S.RightArrow onClick={goToNext} />
      </S.ImageContainer>
      <S.ImagesContainer>
        {images.map((image, index) => (
          <S.SmallImage
            key={index}
            src={image.src}
            alt="product"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </S.ImagesContainer>
      <S.InformationContainer>
        <S.Name>{product.name}</S.Name>
        <S.Price>{product.price} SEK</S.Price>
        <S.PurchaseButton onClick={() => dispatch(addToCart(product))}>
          add to bag
        </S.PurchaseButton>
        <S.ProductInformation
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></S.ProductInformation>
      </S.InformationContainer>
    </S.Container>
  );
}
