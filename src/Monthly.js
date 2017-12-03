import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import OneItem from './OneItem';


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

    _renderTasks = () => {        
        let theList = this.state.monthlyArr.map((item, index) => {
            console.log(item, index)
            return (
                <OneItem item={item} key={index}/>
            )
        })

        return theList
    }
    render() {
        console.log(this.state.monthlyArr.length)
        let monthly = this.state.monthlyArr[this.state.start]    
        console.log(monthly)
        // if(this.state.start + 1 == this.state.monthlyArr.length) {

        // }    
    return (
        <List>
            {this._renderTasks()}
        </List>
    );
    }
}

export default Monthly;
