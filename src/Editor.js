import React, { Component } from 'react';
import './Editor.css';
import Element from './Element.js';
import EditorPanel from './EditorPanel.js';

import leftArrowImg from './img/left-arrow.svg';

class Editor extends Component {
  constructor(props) {
    super(props);
	this.handleValueChange = this.handleValueChange.bind(this);
	this.handleCloseEvent = this.handleCloseEvent.bind(this);
  this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
	
	this.state = {
		style: this.props.element.style,
		currentId: parseInt(this.props.element.id)
	};
  }
  
  handleValueChange(value) {
	  this.setState({style: value});
  }
  
  handleCloseEvent(e) {
	  this.props.onClose(e);
	  e.preventDefault();
  }
  
  handleSubmitEvent(e) {
    const axios = require('axios');
    let action = '';
    var params = {};
    
    if(this.state.currentId===0) {
      action = 'add';
      params = this.state.style;
    } else {
      action = 'update';
      params = Object.assign({selected: false},this.state.style);
      params.id = this.state.currentId;
    }
    
	  axios.get('http://localhost/learning/react-zadanka/pimpmyrect/public/dbservice?'+action, {
      params: params
    }).then((response) => {
      console.log(response.data);
    }).catch((response) => {
      console.log(response);
    });
	  
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
				<Element style={this.state.style} disableControls={true}/>
			</div>
			<EditorPanel onValueChange={this.handleValueChange} style={this.state.style} onSubmit={this.handleSubmitEvent}/>
		</div>
    );
  }
}

export default Editor;
