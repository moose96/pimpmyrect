import React from 'react';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.handleSizeChange = this.handleSizeChange.bind(this);
		this.handleBorderChange = this.handleBorderChange.bind(this);
		
		this.state = this.props.style;
	}
	
	handleSubmit(e) {
		alert('submit!');
		e.preventDefault();
	}
	
	handleColorChange(e) {
		this.setState({backgroundColor: e.target.value});
		this.props.onValueChange(this.state);
	}
	
	handleSizeChange(e) {
		this.setState({
			width: parseInt(e.target.value),
			height: parseInt(e.target.value)});
			
		this.props.onValueChange(this.state);
	}
	
	handleBorderChange(e) {
		this.setState({borderRadius: parseInt(e.target.value)});
		this.props.onValueChange(this.state);
	} 
	
	render() {
		return (
			<div className="editor">
				<form className="editorForm" onSubmit={this.handleSubmit}>
					<div className="formGroupper">
						<p>Background color: </p>
						<input type="color" name="backgroundColor" value={this.state.backgroundColor} onChange={this.handleColorChange}/>
					</div>
				
					<div className="formGroupper">
						<p>Size: </p>
						<input type="number" name="size" min="0" max="200" value={parseInt(this.state.width)} onChange={this.handleSizeChange}/>
					</div>
				
					<div className="formGroupper">
						<p>Border radius: </p>
						<input type="range" name="borderRadius" min="0" max={this.state.width/2} value={parseInt(this.state.borderRadius)} onChange={this.handleBorderChange}/>
					</div>
					<input type="submit" value="Save" />
				</form>
			</div>
		);
	}
}

export default Editor;