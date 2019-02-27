import React from 'react';
import FilterPanel from './FilterPanel.js';

import listViewIcon from './img/list-view.svg';
import thumbViewIcon from './img/thumb-view.svg';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleButtonClick = this.handleButtonClick.bind(this);
		
		this.state = {
			filterPanel: false,
      listView: false
		}
	}
	
	handleButtonClick(e) {
		if(e.target.name === 'filters')
			this.setState({filterPanel: !this.state.filterPanel});
    else if(e.target.name === 'thumb') {
      this.setState({listView: false});
      this.props.onViewButtonClick(this.state.listView);
    }
    else if(e.target.name === 'list') {
      this.setState({listView: true});
      this.props.onViewButtonClick(this.state.listView);
    }
	}
	
	render() {
		return(
			<div className="toolbar">
				<button name="filters" onClick = {this.handleButtonClick}>Filters</button>
				<button name="thumb" onClick={this.handleButtonClick}>
          <img alt="list-view" src={thumbViewIcon} />
        </button>
				<button name="list" onClick={this.handleButtonClick}>
          <img alt="list-view" src={listViewIcon} />
        </button>
				{this.state.filterPanel && <FilterPanel filters={this.props.filters}/>}
			</div>
		);
	}
}

export default Toolbar;