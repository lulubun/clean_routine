import React, { Component } from 'react';
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
