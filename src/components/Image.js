import "../css/Image.css";

function Image({ image }){
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description}/>
        </div>
    );
}

export default Image;