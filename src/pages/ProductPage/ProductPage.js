import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProductPage() {
    const location = useLocation();
    const product = location.state;
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <div>
            <div>
                <img style={{ width: "95%", margin: "auto" }} src={product.images[currentIndex].src} alt='product' />
                <FiChevronLeft onClick={goToPrevious} />
                <FiChevronRight onClick={goToNext} />
            </div>
            <div style={{ display: "flex", overflow: "scroll" }}>
                {images.map((image, index) => (
                    <div>
                        <img
                            key={index}
                            style={{ width: 80 }}
                            src={image.src}
                            alt='product'
                            onClick={() => setCurrentIndex(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
