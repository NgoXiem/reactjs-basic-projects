import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = {lat: null, errorMessage:''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }
    renderContent = () => {
        if(this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            )
        }
        if(!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
                </div>
                )
        }
        
        return (
        <Spinner  message = {"Please accept location request"}></Spinner>
        )
    }
    render() {
        return(
        <div className="boder red">
            {this.renderContent()}
        </div>
        );
    }
}
ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
)
