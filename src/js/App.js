import React, { Component } from 'react';
import NavBar from './Navbar';
import Header from './Header'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Header/>
      </div>
    );
  }
}

export default App;
