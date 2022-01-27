import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {

  state = { lat: null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
          this.setState({lat: position.coords.latitude})
      },
      (err) => {
        console.log(err)
        this.setState({errorMessage: err.message})
      }
    )
  }

  componentDidUpdate(){
    console.log(`Component was updated and rerendered`)
  }

  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div> Error: {this.state.errorMessage}</div>
    }else if(!this.state.errorMessage && this.state.lat){
      return <div> Latitude: {this.state.lat}</div>;
    } else {
      return <div> Loading</div>;
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
