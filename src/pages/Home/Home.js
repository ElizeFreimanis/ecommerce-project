import * as S from "./styled";
import ImageSection from "../../components/ImageSection";
import PopularSection from "../../components/PopularSection";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <S.Container>
            <S.HeaderImage src='/images/header.jpg' alt='header' />
            <S.InfoTextContainer>
                <S.InfoText>
                    At CAIA, our mission goes beyond makeup. We’re here to help people feel good about themselves and their impact
                    in the world. That’s why we create clean, conscious beauty that’s good to your skin, good for the community
                    and good to the planet.
                </S.InfoText>
                <S.TextDivider />
            </S.InfoTextContainer>
            <ImageSection
                header='MAKEUP'
                paragraph='FIND YOUR FAVOURITES'
                image='/images/makeupCover.jpg'
                link='/products/makeup'
            />
            <PopularSection />
            <ImageSection
                header='SKINCARE'
                paragraph='FOR THE PERFECT FACE'
                image='/images/skincareCover.png'
                link='/products/skincare'
            />
            <PopularSection />
        </S.Container>
    );
}
