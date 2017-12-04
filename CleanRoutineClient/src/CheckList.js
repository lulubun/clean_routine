import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import Daily from './Daily'
import Weekly from './Weekly';
import Monthly from './Monthly';



class CheckList extends Component {
    render() {  
        return (
            <div className="CheckList">
            <div className="App-header">
                <h1>Clean Routine</h1>
            </div>
            <Daily />
            <Weekly />
            <Monthly />
            </div>
        );
    }
}

export default CheckList;
