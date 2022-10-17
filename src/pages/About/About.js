import TextSection from "../../components/TextSection";

export default function About() {
    return (
        <div>
            <img
                style={{ objectFit: "cover", width: "100%" }}
                alt='about header'
                src={window.innerWidth > 800 ? "/images/aboutHeaderImg.jpg" : "/images/aboutHeaderImgSmall.jpg"}
            />
            <TextSection header='background' src='/images/CAIABackground.jpg'>
                CAIA is a Stockholm-based D2C beauty company that was founded in 2018 by one of the Nordics most prolific
                influencers Bianca Ingrosso, Vanessa Lindblad and industry veterans Jesper Matsch and Mikael Snabb. The founders
                saw a void in the market for top-quality products with uncompromized results at accessable prices.
                <br />
                <br /> Bianca has been the main character in various reality shows and her social media accounts now boast over a
                million people, who follow her lifestyle and straight-up ‘no-filter’ personality. She have always had a passion
                for make-up and spent a lot her childhood in a TV or theatre make-up studio somewhere in Sweden. She have probably
                been to nearly every studio in the country, helping the make-up artists or cleaning the room at the end of a show.
                The first time she experienced makeup for herself, she never looked back. Bianca was inspired to create Caia
                Cosmetics after years ofexperimenting with the best-of-the-best in beauty.
            </TextSection>
            <TextSection
                header='product philosophy'
                src={window.innerWidth > 800 ? "/images/CAIAPhilosophy.jpg" : "/images/CAIAPhilosophySmall.jpg"}
            >
                We believe beauty products should be of top quality at accessable prices. The products should be easy for everyone
                to use and suit most skin types and skin tones. We offer top quality formulations based on carefully selected
                ingredients. We also have a long list of ingredents we avoid. All products are produced by the biggest well
                renomed actories in France, Italy and Korea. Our skincare has been developed together with toxicologists,
                dermatologists and biologists.
                <br />
                <br /> We always strive to offer the best of the best in beauty. When you enter our universe you don’t only get
                top quality beauty products - you also get a piece of our heart and souls.
            </TextSection>
            <TextSection header='about CAIA makeup' src='/images/CAIAMakeup.jpg'>
                CAIA Make up is a complete range of state of the art products to create the perfect look for various skin tones.
                The assortment has been developed together with make up artists and covers everything from primers to glow
                products. <br />
                <br /> All products are easy to use and comes in luxurious recycable packaging. Our prisma technology that can be
                found in our shimmering bronzers, highlighters and blushes givee a luxurious silky smooth result and natural glow.
            </TextSection>
            <TextSection header='about CAIA skin' src='/images/CAIASkin.jpg'>
                CAIA Skin is dermatologically tested and developed together with dermatologists, toxicologists and biologists to
                ensure that all formulas and ingredients are safe and effective. Every multitasking product is easy to use and
                packed with benefits to deliver optimal results. The products complements CAIA makeup and are specifically
                developed for the most common skin types:
                <br />
                <br /> • Normal Skin
                <br />• Oily / Combination skin
                <br /> • Sensitive / Dry skin - Fragrance free & Allergy tested
                <br />
                <br /> All products are vegan and manufactured in France with high quality ingredients presented in luxury
                recycable packaging.
            </TextSection>
        </div>
    );
}
