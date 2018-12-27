import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CheckList from './Components/CheckList'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CheckList />
      </MuiThemeProvider>
    );
  }
}

export default App;
