import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Travel
        distance = "distance: 3543"
        image ="https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/city-aerial-zurich-switzerland.adapt.1900.1.jpg"
        country="Switzerland"
        destination = "Lugano"
        />

        <Travel
        distance = "distance:4543"
        image ="https://researched.org.uk/wp-content/uploads/2017/11/acf30c02b8ae65c0249a5c244e2b3b387e93b8c4-845x321.jpg"
        country="South Africa"
        destination = "Pretoria"
        />  
      </div>
    );
  }
}

export default App;