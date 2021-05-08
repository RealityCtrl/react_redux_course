//Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

//Create a React component
const App = function() {
    const buttonText = 'Click Me!';
    const labelText = 'Enter Name:';
    return (
    <div>
        <label className="label" htmlFor="name">{labelText}</label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor: 'blue', color:'white'}}>
            {buttonText}
        </button>
    </div>);
}

//Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);