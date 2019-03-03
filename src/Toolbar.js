import React from 'react';
import FilterPanel from './FilterPanel.js';

import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import listViewIcon from './img/list-view.svg';
import thumbViewIcon from './img/thumb-view.svg';

var sortingOptions = [
  {order: null, direction: null},
  {order: 'id', direction: 'desc'},
  {order: 'square', direction: null},
  {order: 'square', direction: 'desc'},
  {order: 'radius', direction: null},
  {order: 'radius', direction: 'desc'}
]

class Toolbar extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleFiltersValueChange = this.handleFiltersValueChange.bind(this);
    this.handleSelectValueChange = this.handleSelectValueChange.bind(this);
		
		this.state = {
			filterPanel: false,
      listView: false,
      currentSortingOption: 0
		}
	}
	
	handleButtonClick(e) {
		//if(e.target.name === 'filters')
			//this.setState({filterPanel: !this.state.filterPanel});
	}
  
  handleToggleChange(value,event) {
    if(value === 'thumb') {
      this.setState({listView: false});
      this.props.onViewButtonClick(false);
    }
    else if(value === 'list') {
      this.setState({listView: true});
      this.props.onViewButtonClick(true);
    }
  }
  
  handleFiltersValueChange(filters) {
    this.props.onFiltersChange(filters);
  }
  
  handleSelectValueChange(e) {
    this.setState({currentSortingOption: e.target.value});
    this.props.onSelectValueChange(sortingOptions[e.target.value]);
  }
	
  //<img alt="list-view" src={thumbViewIcon}/>
  //<img alt="list-view" src={listViewIcon}/>
  
	render() {
    const popover = (
      <Popover id="filterPanel">
        <FilterPanel filters={this.props.filters} onValueChange={this.handleFiltersValueChange}/>
      </Popover>);
		return(
			<div className="toolbar">
        <OverlayTrigger trigger="click" overlay={popover} placement="bottom">
          <button name="filters" onClick = {this.handleButtonClick}>Filters</button>
        </OverlayTrigger>
          { /*
        <div className="btn-group btn-toolbar">
          <button name="thumb" onClick={this.handleButtonClick}> Thumb </button>
          <button name="list" onClick={this.handleButtonClick}> List </button>
          </div> */}
        <ToggleButtonGroup type="radio" name="viewType" defaultValue={this.state.listView?'list':'thumb'} onChange={this.handleToggleChange}>
          <ToggleButton name="thumb" value={"thumb"}> <img alt="list-view" src={thumbViewIcon}/> </ToggleButton>
          <ToggleButton name="list" value={"list"}> <img alt="list-view" src={listViewIcon}/></ToggleButton>
        </ToggleButtonGroup>
        <select value={this.state.currentSortingOption} className="form-control w-25" onChange={this.handleSelectValueChange}>
          <option value={0}>Od najstarszego</option>
          <option value={1}>Od najmłodszego</option>
          <option value={2}>Pole od najmniejszego</option>
          <option value={3}>Pole od największego</option>
          <option value={4}>Zaokrąglenie od najmniejszego</option>
          <option value={5}>Zaokrąglenie od największego</option>
        </select>
			</div>
		);
	}
}

export default Toolbar;