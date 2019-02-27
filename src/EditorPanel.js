import React from 'react';

class EditorPanel extends React.Component {
	constructor(props) {
		super(props);
		this.handleValueChange = this.handleValueChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		this.state = this.props.style;
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(e);
	}
	
	handleValueChange(e) {
		let newStyle=this.props.style;
		
		//console.log(newStyle);	
		
		if(e.target.name==='backgroundColor') {
			this.setState({backgroundColor: e.target.value});
			//newStyle.backgroundColor = e.target.value;
		} else if(e.target.name==='width') {
			this.setState({width: parseInt(e.target.value)});
			//newStyle.width = parseInt(e.target.value);
		} else if (e.target.name==='height') {
			this.setState({height: parseInt(e.target.value)});
			//newStyle.height = parseInt(e.target.value);
		} else if(e.target.name==='borderRadius') {
			this.setState({borderRadius: parseInt(e.target.value)});
			//newStyle.borderRadius = parseInt(e.target.value);
		}
			
		this.props.onValueChange(this.state);
	}

	render() {
		return (
			<div className="editor">
				<form className="editorForm" onSubmit={this.handleSubmit}>
					<div className="formGroupper">
						<p>Background color: </p>
						<input type="color" name="backgroundColor" value={this.state.backgroundColor} onChange={this.handleValueChange}/>
					</div>
				
					<div className="formGroupper">
						<p>Width: </p>
						<input type="number" name="width" min="0" max="800" value={parseInt(this.state.width)} onChange={this.handleValueChange}/>
					</div>
          
					<div className="formGroupper">
						<p>Height: </p>
						<input type="number" name="height" min="0" max="800" value={parseInt(this.state.height)} onChange={this.handleValueChange}/>
					</div>
				
					<div className="formGroupper">
						<p>Border radius: </p>
						<input type="range" name="borderRadius" min="0" max={this.state.width/2} value={parseInt(this.state.borderRadius)} onChange={this.handleValueChange}/>
					</div>
					<input type="submit" value="Save" />
				</form>
			</div>
		);
	}
}

export default EditorPanel;

//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" 			    
//title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    
//title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>