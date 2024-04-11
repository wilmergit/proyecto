import "./Gallery.css"
import { useState } from "react";


function Gallery() {

    const [stateGallery, setStateGallery] = useState('gallery-carousel');

    const changeStateGallery = () => {
        if (stateGallery == 'gallery-carousel') {
            setStateGallery('gallery-carousel next');
        }
        else {
            setStateGallery('gallery-carousel');
        }
    }

    return (

        <div onClick={changeStateGallery} className={stateGallery}>
            <div className="carousel-list">
                <div className="list-item">
                    <img src="./images/sphinx.jpg" alt="sphinx" />
                    <div className="item-content">
                        <div className="item-author">Autor</div>
                        <div className="item-title">Titulo</div>
                        <div className="item-category">Categoria</div>
                        <div className="item-description">
                            Esto es un texto de prueba para la descripcion.
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <img src="./images/victoria.png" alt="victoria" />
                    <div className="item-content">
                        <div className="item-author">Autor</div>
                        <div className="item-title">Titulo</div>
                        <div className="item-category">Categoria</div>
                        <div className="item-description">
                            Esto es un texto de prueba para la descripcion.
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <img src="./images/david.webp" alt="sphinx" />
                    <div className="item-content">
                        <div className="item-author">Autor</div>
                        <div className="item-title">Titulo</div>
                        <div className="item-category">Categoria</div>
                        <div className="item-description">
                            Esto es un texto de prueba para la descripcion.
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                        </div>
                    </div>
                </div>
                <div className="thumbnail">
                    <div className="list-item">
                        <img src="./images/sphinx.jpg" alt="sphinx" />
                        <div className="item-content">
                            <div className="item-title">
                                TITLE
                            </div>
                            <div className="item-description">
                                Descripcion
                            </div>
                        </div>
                    </div>
                    <div className="list-item">
                        <img src="./images/victoria.png" alt="victoria" />
                        <div className="item-content">
                            <div className="item-title">
                                TITLE
                            </div>
                            <div className="item-description">
                                Descripcion
                            </div>
                        </div>
                    </div>
                    <div className="list-item">
                        <img src="./images/david.webp" alt="sphinx" />
                        <div className="item-content">
                            <div className="item-title">
                                TITLE
                            </div>
                            <div className="item-description">
                                Descripcion
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <button id="prev">{'<'}</button>
                    <button id="next">{'>'}</button>
                </div>
                <div className="time"></div>
            </div>
        </div>
    )
}

export default Gallery;