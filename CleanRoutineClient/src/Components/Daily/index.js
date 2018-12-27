import React, { Component } from 'react';
import { List } from 'material-ui/List';
import OneItem from '../OneItem';


class Daily extends Component {
  state={
    dailyArr: [
      'wipe kitchen counters',
      'wipe bathroom counters',
      'load/unload dishwasher',
      'load of laundry',
      'take out kitchen trash',
      'vacuum living room and hallway',
      'tidy up',
      'wipe down dining table',
      'empty dehumidifier'
    ],
    dailyCount: 0
  }
        
  _renderTasks = () => {  
    let count = this.state.dailyCount;
    let theItem = this.state.dailyArr[count];
    return (
      <OneItem item={theItem} type={'daily'} id={count}/>
    )
  }

  render() {
    return (
      <List>
        {this._renderTasks()}
      </List>
    );
  }
}

export default Daily;
