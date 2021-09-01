import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loaded: false, spans: 0 };
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        const img = this.imageRef.current;
        if (img.complete && img) {
            this.handleImageLoaded();
        }
    }

    // Function to handle the image loading event.
    handleImageLoaded() {
        if (!this.state.loaded) {
            this.setState({ loaded: true });
            const height = (this.imageRef.current.clientHeight);
            this.setState({ spans: Math.ceil(height / 10) });
        }
    }


    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} onLoad={this.handleImageLoaded} />
            </div>
        );
    }
}

export default ImageCard;