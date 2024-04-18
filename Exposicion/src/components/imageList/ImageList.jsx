import photos from "../../services/photos/photos";
import "./ImageList.css";



function ImageList(){
    return (
        <>

            <div className="imageList-container">
                {
                    photos.map((photo, index) => (
                        <>  
                            <div className="imageList-container">
                                <div className="imageList-images">
                                    <p>{photo.name}</p>
                                    <img key={index} src={`./images/${photo.fileName}`} alt="imagen" />
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default ImageList;