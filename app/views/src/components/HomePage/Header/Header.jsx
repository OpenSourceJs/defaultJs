import React, { Component } from 'react';
import Nav from './Nav/Nav.jsx'
import './Header.css';

export default class Header extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    	header: 'Brand Name'
    }
  }

  render() {
    return (
      <div id="head">
         <h3 className='center'>{this.state.header}</h3>
      </div>
    );
  }
}
