import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CheckList from './CheckList'


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
