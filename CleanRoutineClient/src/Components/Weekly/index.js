import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import OneItem from '../OneItem';
import * as actions from './actions'


class Weekly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeklyArr: props.weeklyArr,
      start: props.startCount,
    };
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
          key={weekly.key}
          />
      </List>
      </div>
  );
  }
}

const mapStateToProps = (state) => ({
  startCount: state.startCount,
  weeklyArr: state.weeklyArr,
});
  
const mapDispatchToProps = (dispatch) => ({
    newSearch: (term) => dispatch(actions.startSearch(term)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Weekly);