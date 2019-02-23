import React from 'react';

class EditorPanel extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.handleSizeChange = this.handleSizeChange.bind(this);
		this.handleBorderChange = this.handleBorderChange.bind(this);
		
		this.state = this.props.style;
	}
	
	handleSubmit(e) {
		fetch('http://localhost/learning/react-zadanka/pimpmyrect/public/dbservice.php', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)
		})
			.then(function(resp){
				console.log(resp.text());
			})
			.catch(function(error) {
				console.log(error);
			});
		e.preventDefault();
		this.props.onSubmit(e);
	}
	
	handleColorChange(e) {
		this.setState({backgroundColor: e.target.value});
		this.props.onValueChange(this.state);
	}
	
	handleSizeChange(e) {
    if(e.target.name==='width') {
      this.setState({width: parseInt(e.target.value)});
    } else if (e.target.name==='height') {
      this.setState({height: parseInt(e.target.value)});
    }
			
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
						<p>Width: </p>
						<input type="number" name="width" min="0" max="200" value={parseInt(this.state.width)} onChange={this.handleSizeChange}/>
					</div>
          
          <div className="formGroupper">
						<p>Height: </p>
						<input type="number" name="height" min="0" max="200" value={parseInt(this.state.height)} onChange={this.handleSizeChange}/>
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

export default EditorPanel;

//<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" 			    
//title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    
//title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>