import { useState } from "react";
import photos from "../../services/photos/photos";
import "./ImageList.css";

function ImageList() {
    const photoIndex = 0;

    const [photoToShow, setPhotoToShow] = useState(photos[photoIndex]);

    const changePhoto = () => {
        if (photoToShow == photos[photoIndex]) {
            if (photoIndex <= photos.length){
                setPhotoToShow(photos[photoIndex + 1])
                return
            }
        }

    }

    return (
        <>

            <div className="imageList-container" id="images">
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