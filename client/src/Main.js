import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AddContainer from "./AddContainer";
import Display from "./Display";


class Main extends Component {
  state = {
    data: []
  };
  handleResponse = response => {
    console.log(response)
    this.setState(() => {
      return{
      data:
      [response.id,
      response.name,
      response.city,
      response.country,
      response.IATA3,
      response.IATA4,
      response.latitute,
      response.longitude
      ]
      }
    });

    console.log(this.state.data)
  };

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Display data={this.state.data} />}
          />
          <Route
            path="/Add"
            component={props => <AddContainer onSubmit={this.handleResponse} />}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
