import React, { Component } from "react";
import logo from "./logo.svg";
import GridComponent from "./components/GridComponent/"
import "./App.css";

class App extends Component {
  state = {
    sheet: {},
    sheetData: {}
  };

  componentWillMount() {
    this.getData();
  }
  getData = () => {
    const SPREADSHEET_ID = "1YXYqO1KTEPImoREg69Ln6vh1uI_jg83FmKQ1puulUOc";
    const API_URL = "https://sheets.googleapis.com/v4/spreadsheets";
    const API_KEY = "AIzaSyC2qA2hiYKbgdClhoiznyT0aI-F1TDTeMM";
    const data = this.state.sheet.data;
    let numberOfRows = {}
    let sheetTitle = {}

    fetch(API_URL + "/" + SPREADSHEET_ID + "/" + "?key=" + API_KEY)
      .then(res => res.json())
      .then(data => {
        this.setState({ sheet: { data } });
        data.sheets.map((sheet) =>{
          
             numberOfRows = sheet.properties.gridProperties.rowCount
             sheetTitle = sheet.properties.title
           }
          
           )
           fetch(API_URL + "/" + SPREADSHEET_ID + "/" + "values/"+ sheetTitle +"!A1:H"+ numberOfRows +"/" + "?key=" + API_KEY)
           .then(res => res.json())
           .then(data=>{
             this.setState({sheetData:{data}})
           })
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Guestlogix</h1>
        </header>
         { this.state.sheetData.length != 0 ? <GridComponent data={this.state.sheetData.data}/> :null}
      </div>
    );
  }
}

export default App;