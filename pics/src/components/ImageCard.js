import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.imagerRef = React.createRef();
    }

    componentDidMount() {
        this.imagerRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        const heights = this.imagerRef.current.clientHeight;
        const spans = Math.ceil(heights/10);
        this.setState({spans});
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}
export default ImageCard