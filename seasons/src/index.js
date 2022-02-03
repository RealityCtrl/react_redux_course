import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Spinner from './Spinner'
import "semantic-ui-css/semantic.min.css";

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

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div> Error: {this.state.errorMessage}</div>
    }else if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>;
    } else {
      return <Spinner message="Please accept locaton request"/>;
    }
  }

  render(){
    return(
      <div className="border red">{this.renderContent()}</div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
