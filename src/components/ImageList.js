import React from "react";

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <div className="col-md-3">
                <div className="card">
                    <img src={image.urls.regular} alt={image.alt_description} />
                </div>
            </div>
        )
    });
    return <div>{images}</div>;
};

export default ImageList;