import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import OneItem from './OneItem';




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
        ]
    }

    _renderTasks = () => {        
        let theList = this.state.dailyArr.map((item, index) => {
            console.log(item, index)
            return (
                <OneItem item={item} key={index}/>
            )
        })

        return theList
    }
        
    render() {
        //console.log(daily)
        // if(this.state.start + 1 == this.state.dailyArr.length) {

        // }    
    return (
        <List>
           {this._renderTasks()}
        </List>
    );
    }
}

export default Daily;
