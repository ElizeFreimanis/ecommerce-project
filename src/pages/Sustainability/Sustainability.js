import { useEffect } from "react";
import TextSection from "../../components/TextSection";
import * as S from "./styled";

export default function Sustainability() {
  useEffect(() => {
    document.title = "SUSTAINABILITY";
  }, []);

  return (
    <S.Container>
      <S.HeaderImage
        alt="about header"
        src={
          window.innerWidth > 800
            ? "/images/sustainabilityHeader.jpg"
            : "/images/sustainabilityHeaderSmall.jpg"
        }
      />
      <TextSection header="production" src="/images/sustainability1.jpg">
        With the mission to only develop products of top quality, sourcing of
        suppliers is made with high requirements and demands in terms of
        sustainable and safe production.
        <br /> In order to make CAIA’s position clear and illustrate what we
        expect from our suppliers and business partners, we have set up a Code
        of Conduct. All major suppliers are obliged to sign the Code of Conduct
        in order to proceed with any business agreements. Our Code of Conduct
        sets minimal requirements for suppliers to reach within areas of
        ethical, social and environmental concerns.
      </TextSection>
      <TextSection header="ingredients" src="/images/sustainability2.jpg">
        On top of following the comprehensive regulation by the EU regarding
        cosmetic corporations and use of ingredients, we have established our
        own blacklist with ingredients that we do not tolerate in our products.
      </TextSection>
      <TextSection header="vegan" src="/images/sustainability3.jpg">
        Today, a large majority of our products are vegan. All of our skincare
        products and tools are vegan. 86% of our makeup products are vegan. We
        are in the process of phasing out non-vegan formulas. We estimate to
        have a full vegan assortment by the end of 2023.
      </TextSection>
      <TextSection header="packaging" src="/images/sustainability4.jpg">
        Per today, 100% of our primary and secondary packaging is recyclable. We
        constantly research how packaging can be further improved for a reduced
        footprint. Recently we launched Single Eyeshadows, where the primary
        package is made of 100% recycled PET plastic. This is our first product
        made of recycled PET plastic and with a circular use, but not the last.
        We use FSC certified paper for all outbound logistics, and are in the
        process of adding FSC certified paper for all secondary packaging.
      </TextSection>
      <S.Content>
        <S.Header>logistics</S.Header>
        <S.Text>
          We transport a vast majority of all inbound transports to our
          warehouse with road and sea freight. We always strive to maximize the
          capacity of our transportation in order to avoid any unnecessary
          climate impact. The same approach is used for all outbound deliveries;
          maximization of capacity in trucks and containers. For outbound
          logistics, all used spedition partners have policies and strategies to
          minimize their carbon footprint. To avoid all unnecessary waste, we
          have banned plastic fillings for all deliveries, as well as excluded
          paper notes.
        </S.Text>
      </S.Content>
      <S.FooterImage
        alt="sustainability info"
        src={
          window.innerWidth > 800
            ? "/images/sustainabilityInfo.jpg"
            : "/images/sustainabilityInfoSmall.jpg"
        }
      />
    </S.Container>
  );
}
