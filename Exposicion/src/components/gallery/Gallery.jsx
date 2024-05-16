import { useState } from "react";
import './Gallery.css';

function Gallery() {

    const [activeIndex, setActiveIndex] = useState(3); // Indice del elemento activo inicial

    const images = [
        { src: "./images/manhunt.webp", alt: "Action", title: "Action" },
        { src: "./images/ffx.jpg", alt: "RPG", title: "Rpg" },
        { src: "./images/nfs.png", alt: "Racing", title: "Racing" },
        { src: "./images/Hades.avif", alt: "Roguelite", title: "Roguelite" },
        { src: "./images/fifa.avif", alt: "Sports", title: "Sports" },
        { src: "./images/outlast.jpg", alt: "Horror", title: "Horror" },
        { src: "./images/cod.jpg", alt: "Shooter", title: "Shooter" }
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="slider-container">
            <div className="slider-images">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slider-img ${index === activeIndex ? "active" : ""}`}
                        onClick={() => handleClick(index)}
                    >
                        <img src={image.src} alt={image.alt} />
                        <h1 id="img-title">{image.title}</h1>
                        <div className="details">
                            <h2>{image.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;