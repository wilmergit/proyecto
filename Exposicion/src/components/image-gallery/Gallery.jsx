import "./Gallery.css"

function Gallery(){
    return (
        <div className="gallery-carousel">
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
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;