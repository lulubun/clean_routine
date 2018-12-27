import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import OneItem from '../OneItem';
import * as actions from './actions';


class Monthly extends Component {
  state={
    monthlyArr: [
      'dust livingroom side table and TV',
      'wash sofa blankets',
      'Dust bedroom bookshelves',
      'dust bedside tables',
      'take out trash from back rooms',
      'wash duvet',
      'wash dog beds',
      "dust Maeve's room",
      'dust backroom',
      'clean out freezer',
      'clean out fridge',
      'wipe out trash area under sink',
      'clean dishwasher filter',
      'clean oven',
      'put vinegar & baking soda down kitchen drain',
      'wash water pitchers',
      'wash shower curtains',
      'put vinegar & baking soda down shower and bath sink drains',
      'wash tub mat'
    ]
  }

  _renderTasks = (item) => {        
    console.log(item)
    return (
      <OneItem item={item} />
    )
  }

  render() {
    let monthly = this.state.monthlyArr[this.state.start]    
    return (
      <List>
        {this._renderTask(monthly)}
      </List>
    );
  }
}

export default Monthly;
