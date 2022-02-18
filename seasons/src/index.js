import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from "./Spinner";


class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    render() {
        return <div className={"border red"}>
            {this.getRenderContent()};
        </div>
    }

    getRenderContent() {
        if (this.state.errorMessage) {
            return <div> Error: {this.state.errorMessage} </div>
        }
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message={"Please Accept Location Request"}/>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))