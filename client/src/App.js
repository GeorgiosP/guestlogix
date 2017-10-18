import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {data: {}}

  componentWillMount(){
    this.getData() 
    console.log(this.state.data)
  }
  getData = () =>
  {
    const SPREADSHEET_ID = '1YXYqO1KTEPImoREg69Ln6vh1uI_jg83FmKQ1puulUOc'
    const API_URL = 'https://sheets.googleapis.com/v4/spreadsheets'
    const API_KEY = 'AIzaSyC2qA2hiYKbgdClhoiznyT0aI-F1TDTeMM'
    fetch(API_URL+"/"+SPREADSHEET_ID+"/"+"?key="+API_KEY)
    .then(res => res.json())
    .then(data => console.log(data.sheets))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
        </p>
      </div>
    );
  }
}

export default App;
