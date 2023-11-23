import "../css/ImageList.css";
import ImageShow from "./Image";

function ImageList({ images }){

    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    });

    return (
        <div>{renderedImages}</div>
    );
}

export default ImageList;