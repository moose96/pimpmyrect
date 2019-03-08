import React from 'react';

import CONFIG from './../config.json';
import FilterPanel from './../panels/FilterPanel.js';

import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import {ReactComponent as ListViewIcon} from './../img/187-list.svg';
import {ReactComponent as ThumbViewIcon} from './../img/grid.svg';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);
		
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleFiltersValueChange = this.handleFiltersValueChange.bind(this);
    this.handleSelectValueChange = this.handleSelectValueChange.bind(this);
		
		this.state = {
			filterPanel: false,
      listView: false,
      currentSortingOption: 0
		}
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
    this.props.onSelectValueChange(CONFIG.sortingOptions[e.target.value].data);
  }
	
  
	render() {
    const popover = (
      <Popover id="filterPanel">
        <FilterPanel filters={this.props.filters} onValueChange={this.handleFiltersValueChange}/>
      </Popover>);
      
		return(
			<div className="toolbar">
      
        <OverlayTrigger trigger="click" overlay={popover} placement="bottom">
          <button name="filters">Filters</button>
        </OverlayTrigger>
        
        
        <ToggleButtonGroup type="radio" name="viewType" defaultValue={this.state.listView?'list':'thumb'} onChange={this.handleToggleChange}>
        
          <ToggleButton name="thumb" value={"thumb"}>
            <ThumbViewIcon />
          </ToggleButton>
          
          <ToggleButton name="list" value={"list"}>
            <ListViewIcon />
          </ToggleButton>
          
        </ToggleButtonGroup>
        
        
        <select value={this.state.currentSortingOption} className="form-control w-25" onChange={this.handleSelectValueChange}>
          {CONFIG.sortingOptions.map(function(element,index){
            return (<option value={index}>{element.name}</option>);
          })}
        </select>
        
			</div>
		);
	}
}

export default Toolbar;