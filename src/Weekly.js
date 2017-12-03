import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import OneItem from './OneItem';


class Weekly extends Component {
    state={
        weeklyArr: ['bathroom sink & bathroom mirrors', 'bathroom floors (sweep & mop & change bathmats)', 'scrub shower', 'clean toilet and empty bathroom trash', 'mop wood floor area', 'shred junkmail', 'change all bedroom sheets', 'deep counter clean in kitchen', 'vacuum living room and other carpets', 'mop all other wood floors', 'vaccum and mop kitchen floor', 'clean sink', 'clean oven range'],
        start: 0,
    }

    finishTask() {
        let count = this.state.start + 1;
        console.log(this.state.start, count, "?",  this.state.weeklyArr.length)
        
        this.setState({start: count})
        if(count == this.state.weeklyArr.length){
            this.setState({start: 0})
        } else {
            console.log('no')
        }
    }
    render() {
        console.log(this.state.weeklyArr.length)
        let weekly = this.state.weeklyArr[this.state.start]    
        console.log(weekly)
        // if(this.state.start + 1 == this.state.weeklyArr.length) {

        // }    
    return (
        <div>
        <List>
            <ListItem
            leftCheckbox={<Checkbox 
                onCheck={this.finishTask.bind(this)}
                checked={this.state.checked}                
            />}
            primaryText={weekly}
            />
        </List>
        </div>
    );
    }
}

export default Weekly;
