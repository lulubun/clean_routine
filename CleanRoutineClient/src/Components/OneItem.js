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

    finishTask(v, id) {
        console.log('done', v, id)
        this.setState({checked: !this.state.checked})
    }

    render(){ 
        const { id, type, item} = this.props;
        return (
            <div>
            <ListItem
                key={type + id}
                leftCheckbox={<Checkbox 
                    onCheck={(e) => {
                      this.finishTask(e.target.checked, type + id)
                    }}
                    checked={this.state.checked}                
                />}
                primaryText={item}
            />
            </div>
        )
    }
}

export default OneItem;
