import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        const img = this.imageRef.current;
        if (img.complete && img) {
            this.handleImageLoaded();
        }
    }

    handleImageLoaded() {
        if (!this.state.loaded) {
            this.setState({ loaded: true });
            console.log(this.imageRef.current.clientHeight);
        }
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular} onLoad={this.handleImageLoaded} />
            </div>
        );
    }
}

export default ImageCard;