import React, { Component } from 'react';
import './App.css';
import Element from './Element.js';
import Editor from './Editor.js';

class App extends Component {
  constructor(props) {
    super(props);
	this.handleValueChange = this.handleValueChange.bind(this);
	
	this.state = {
		style: {
			backgroundColor: '#ff0000',
			width: 100,
			height: 100,
			borderRadius: 10
		}
	}
  }
  
  handleValueChange(value) {
	  this.setState({style: value});
  }
  
  render() {
    return (
	  <div className="app">
        <div className="output">
			<Element style={this.state.style} />
		</div>
	    <Editor onValueChange={this.handleValueChange} style={this.state.style}/>
	  </div>
    );
  }
}

export default App;
