//Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

//Create a React component
class Clock extends React.Component {
    state = { time:new Date().toLocaleTimeString()};

    componentDidMount() {
        setInterval(() => {
            const timeString = new Date().toLocaleTimeString();
            console.log(timeString)
            this.setState( {time: timeString});    
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}

//Take the react component and show it on the screen

ReactDOM.render(
    <Clock />,
    document.querySelector('#root')
);
