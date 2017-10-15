import React, {  Component } from 'react';
import './HomePage.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <div >
        <h3>Welcome to my defaultJs</h3>
        <p>Run "npm install && npm start" to install your dependencies and start your server.</p>
        <p>Run "npm run watch" to config your webpack.</p>

      </div>
    );
  }
}
