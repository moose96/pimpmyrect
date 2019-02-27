import React from 'react';

class FilterPanel extends React.Component {
	constructor(props) {
		super(props);
		this.handleValueChange = this.handleValueChange.bind(this);
		
		this.state = this.props.filters;
	}
	
	handleValueChange(e) {	
		// if(e.target.name==='backgroundColor') {
			// this.setState({backgroundColor: e.target.value});
			//newStyle.backgroundColor = e.target.value;
		// } else if(e.target.name==='width') {
			// this.setState({width: parseInt(e.target.value)});
			//newStyle.width = parseInt(e.target.value);
		// } else if (e.target.name==='height') {
			// this.setState({height: parseInt(e.target.value)});
			//newStyle.height = parseInt(e.target.value);
		// } else if(e.target.name==='borderRadius') {
			// this.setState({borderRadius: parseInt(e.target.value)});
			//newStyle.borderRadius = parseInt(e.target.value);
		// }
			
		// this.props.onValueChange(this.state);
	}

	render() {
		return (
			<div className="editor">
				<form className="editorForm">
					<div className="formGroupper">
						<input type="checkbox" checked={this.props.filters.backgroundColor.active} name="backgroundColorActive" />
						<p>Background color: </p>
						<input type="color" name="backgroundColor" value={this.props.filters.backgroundColor.value} onChange={this.handleValueChange}/>
					</div>
				
					<div className="formGroupper">
						<input type="checkbox" checked={this.props.filters.width.active} name="widthActive" />
						<p>Width: </p>
						<input type="number" name="width" min="0" max="800" value={this.props.filters.width.value} onChange={this.handleValueChange}/>
					</div>
          
					<div className="formGroupper">
						<input type="checkbox" checked={this.props.filters.height.active} name="heightActive" />
						<p>Height: </p>
						<input type="number" name="height" min="0" max="800" value={this.props.filters.height.value} onChange={this.handleValueChange}/>
					</div>
				
					<div className="formGroupper">
						<input type="checkbox" checked={this.props.filters.borderRadius.active} name="borderRadiusActive" />
						<p>Border radius: </p>
						<input type="range" name="borderRadius" min="0" max="100" value={this.props.filters.borderRadius.value} onChange={this.handleValueChange}/>
					</div>
				</form>
			</div>
		);
	}
}

export default FilterPanel;

//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" 			    
//title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    
//title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>