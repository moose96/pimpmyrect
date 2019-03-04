import React from 'react';

import CONFIG from './config.js';

import './panel.scss';

class FilterPanel extends React.Component {
	constructor(props) {
		super(props);
		this.handleValueChange = this.handleValueChange.bind(this);
		
		this.state = this.props.filters;
	}
	
	handleValueChange(e) {
    let newFilters = Object.assign({},this.state);
    var Color = require('color');
    
		if(e.target.name==='backgroundColor') {
			newFilters.backgroundColor.value = e.target.value;
		} else if(e.target.name==='width') {
			newFilters.width.value = parseInt(e.target.value);
		} else if (e.target.name==='height') {
			newFilters.height.value = parseInt(e.target.value);
		} else if(e.target.name==='borderRadius') {
			newFilters.borderRadius.value = parseInt(e.target.value);
		}
    
    else if(e.target.id==='backgroundColorActive') {
      newFilters.backgroundColor.active = e.target.checked;
    }else if(e.target.id==='widthActive') {
      newFilters.width.active = e.target.checked;
    }else if(e.target.id==='heightActive') {
      newFilters.height.active = e.target.checked;
    }else if(e.target.id==='borderRadiusActive') {
      newFilters.borderRadius.active = e.target.checked;
    }
    
    this.setState(newFilters);
			
		this.props.onValueChange(newFilters);
	}

	render() {
		return (
				<form className="filterPanel">
					<div className="form-group">
            <div className="custom-control custom-checkbox form-check-inline">
              <input type="checkbox" className="custom-control-input" checked={this.props.filters.backgroundColor.active} id="backgroundColorActive" onChange={this.handleValueChange}/>
              <label className="custom-control-label" htmlFor="backgroundColorActive">Background color: </label>
            </div>
						{/*<input type="color" name="backgroundColor"className="form-control"  value={this.props.filters.backgroundColor.value} onChange={this.handleValueChange}/>*/}
            <select name="backgroundColor" value={this.props.filters.backgroundColor.value} className="form-control" onChange={this.handleValueChange}>  
              {CONFIG.colorsTable.map(function(element,index){
                return (<option value={index}>{element.name}</option>);
              })}
            </select>
					</div>
				
					<div className="form-group">
            <div className="custom-control custom-checkbox form-check-inline">
              <input type="checkbox" className="custom-control-input" checked={this.props.filters.width.active} id="widthActive" onChange={this.handleValueChange}/>
              <label className="custom-control-label" htmlFor="widthActive">Width: </label>
            </div>
						<input type="number" name="width" min="0" max="800" className="form-control" value={this.props.filters.width.value} onChange={this.handleValueChange}/>
					</div>
          
					<div className="form-group">
            <div className="custom-control custom-checkbox form-check-inline">
              <input type="checkbox" className="custom-control-input" checked={this.props.filters.height.active} id="heightActive" onChange={this.handleValueChange}/>
              <label className="custom-control-label" htmlFor="heightActive">Height: </label>
            </div>
						<input type="number" name="height" min="0" max="800" className="form-control" value={this.props.filters.height.value} onChange={this.handleValueChange}/>
					</div>
				
					<div className="form-group">
            <div className="custom-control custom-checkbox form-check-inline">
              <input type="checkbox" className="custom-control-input" checked={this.props.filters.borderRadius.active} id="borderRadiusActive" onChange={this.handleValueChange}/>
              <label className="custom-control-label" htmlFor="borderRadiusActive">Border radius: </label>
            </div>
						<input type="range" name="borderRadius" min="0" max="100" className="custom-range" value={this.props.filters.borderRadius.value} onChange={this.handleValueChange}/>
					</div>
				</form>
		);
	}
}

export default FilterPanel;

//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" 			    
//title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    
//title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>