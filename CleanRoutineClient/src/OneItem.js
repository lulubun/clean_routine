import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

class OneItem extends Component {
    state={
        item: this.props.item,
        checked: false
    }

    finishTask() {
        console.log('done')
        this.setState({checked: !this.state.checked})
    }

    render(){ 
        console.log('one')
        return (
            <div>
            <ListItem
                leftCheckbox={<Checkbox 
                    onCheck={this.finishTask.bind(this)}
                    checked={this.state.checked}                
                />}
                primaryText={this.props.item}
            />
            </div>
        )
    }
}

export default OneItem;
