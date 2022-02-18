import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return "Click Me!";
}

const App = () => {
    return (
        <div>
            <label className={"label"} htmlFor={"name"}>
                Enter your Name:
            </label>
            <input id={"name"} type={"text"}/>
            <button style={{"backgroundColor": 'blue', "color": 'white'}}>
                {getButtonText()}
            </button>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);