import React, {  Component } from 'react';
import { Link } from 'react-router';
import './App.css'

export default class App extends React.Component {
    constructor(props) {
      super(props);

        this.state = {
        // states goes here !!!
      };
    }

updateState(key, value) {
    this.setState({
      [key]: value,
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

    render() {
        return (
          <div>
             {this.props.children && React.cloneElement(this.props.children, {
              updateOverallState: (k, v) => this.updateState(k, v),
             })}
          </div>
        );
    }

}





