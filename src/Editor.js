import React, { Component } from 'react';
import './App.css';
import Element from './Element.js';
import EditorPanel from './EditorPanel.js';

import leftArrowImg from './img/left-arrow.svg';

class App extends Component {
  constructor(props) {
    super(props);
	this.handleValueChange = this.handleValueChange.bind(this);
	this.handleCloseEvent = this.handleCloseEvent.bind(this);
	
	this.state = {
		style: this.props.element.style
	}
  }
  
  handleValueChange(value) {
	  this.setState({style: value});
  }
  
  handleCloseEvent(e) {
	  this.props.onClose(e);
	  e.preventDefault();
  }
  
  render() {
    return (
		<div className="app">
			<div className="menu">
				<a href="" className="returnButton" onClick={this.handleCloseEvent}><img alt="wstecz" src={leftArrowImg} /></a>
			</div>
			<div className="output">
				<Element style={this.state.style} />
			</div>
			<EditorPanel onValueChange={this.handleValueChange} style={this.state.style} onSubmit={this.handleCloseEvent}/>
		</div>
    );
  }
}

export default App;
