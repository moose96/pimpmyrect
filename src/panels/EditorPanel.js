import React from 'react';

import './Panel.scss';

import {RangeIcons} from './../helper.js'

import './Panel.scss';

class EditorPanel extends React.Component {
	constructor(props) {
		super(props);
		this.handleValueChange = this.handleValueChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(e);
	}
	
	handleValueChange(e) {
		this.props.onValueChange(e);
	}

	render() {
    var classnames = require('classnames');
		return (
			<div className={classnames({
        editor: true,
        rightCovered: !this.props.show
      })}>
				<form className="editorForm" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="backgroundColor">Background color: </label>
						<input type="color" name="backgroundColor" className="form-control" value={this.props.style.backgroundColor} onChange={this.handleValueChange}/>
					</div>
				
					<div className="form-group">
						<label htmlFor="width">Width: </label>
						<input type="number" name="width" className="form-control" min="0" max="800" value={parseInt(this.props.style.width)} onChange={this.handleValueChange}/>
					</div>
          
					<div className="form-group">
						<label htmlFor="height">Height: </label>
						<input type="number" name="height" className="form-control" min="0" max="800" value={parseInt(this.props.style.height)} onChange={this.handleValueChange}/>
					</div>
				
					<div className="form-group">
						<label htmlFor="borderRadius">Border radius: </label>
            <RangeIcons />
						<input type="range" name="borderRadius" className="custom-range" min="0" max={this.props.style.width/2} value={parseInt(this.props.style.borderRadius)} onChange={this.handleValueChange}/>
					</div>
					<input type="submit" className="form-control" value="Save"/>
				</form>
			</div>
		);
	}
}

export default EditorPanel;

//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" 			    
//title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    
//title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>