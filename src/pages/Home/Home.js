import * as S from "./styled";
import ImageSection from "../../components/ImageSection";
import PopularSection from "../../components/PopularSection";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const products = useSelector((state) => state.products);

  const makeupProducts = useMemo(
    () =>
      products.filter((p) =>
        p.categories.find((p) => p.slug === "popular-makeup")
      ),
    [products]
  );

  const skincareProducts = useMemo(
    () =>
      products.filter((p) =>
        p.categories.find((p) => p.slug === "popular-skincare")
      ),
    [products]
  );

  useEffect(() => {
    document.title = "CAIA";
  }, []);

  return (
    <S.Container>
      <S.HeaderImage src="/images/header.jpg" alt="header" />
      <S.InfoTextContainer>
        <S.InfoText>
          At CAIA, our mission goes beyond makeup. We’re here to help people
          feel good about themselves and their impact in the world. That’s why
          we create clean, conscious beauty that’s good to your skin, good for
          the community and good to the planet.
        </S.InfoText>
        <S.TextDivider />
      </S.InfoTextContainer>
      <ImageSection
        header="MAKEUP"
        paragraph="FIND YOUR FAVOURITES"
        image="/images/makeupCover.jpg"
        link="/products/makeup"
      />
      <PopularSection products={makeupProducts} />
      <ImageSection
        header="SKINCARE"
        paragraph="FOR THE PERFECT FACE"
        image="/images/skincareCover.png"
        link="/products/skincare"
      />
      <PopularSection products={skincareProducts} />
    </S.Container>
  );
}
