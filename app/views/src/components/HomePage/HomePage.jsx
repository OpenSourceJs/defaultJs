import React, {  Component } from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
       <Header />
       <h1>Welcome to my default template</h1>
       <p>Run npm install && npm start to install your dependencies and start your server</p>
       <Footer />
      </div>
    );
  }
}
