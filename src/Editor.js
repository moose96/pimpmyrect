import React, { Component } from 'react';
import './Editor.scss';
import Element from './Element.js';
import EditorPanel from './panels/EditorPanel.js';
import CONFIG from './config.json';

import {ReactComponent as LeftArrowImg} from './img/321-arrow-left2.svg';
import {ReactComponent as MenuImg} from './img/190-menu.svg';

class Editor extends Component {
  constructor(props) {
    super(props);
	this.handleValueChange = this.handleValueChange.bind(this);
	this.handleCloseEvent = this.handleCloseEvent.bind(this);
  this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
  this.handleMenuButtonEvent = this.handleMenuButtonEvent.bind(this);
	
	this.state = {
		style: this.props.element.style,
		currentId: parseInt(this.props.element.id),
    menuShow: false
	};
  }
  
  handleValueChange(e) {
    let newStyle = Object.assign({},this.state.style);
    
    if(e.target.name==='backgroundColor') {
      newStyle.backgroundColor = e.target.value;
		} else if(e.target.name==='width') {
			newStyle.width = parseInt(e.target.value);
		} else if (e.target.name==='height') {
			newStyle.height = parseInt(e.target.value);
		} else if(e.target.name==='borderRadius') {
			newStyle.borderRadius = parseInt(e.target.value);
		}
    
    this.setState({style: newStyle});
  }
  
  handleCloseEvent(e) {
	  this.props.onClose(e);
	  e.preventDefault();
  }
  
  handleSubmitEvent(e) {
    const axios = require('axios');

    
    if(this.state.currentId===0) {
      axios.post(CONFIG.dbServicePath, {
        style: this.state.style
      }).then((response) => {
        console.log(response.data);
      }).catch((response) => {
        console.log(response);
      });
    } else {
      axios.put(CONFIG.dbServicePath+this.state.currentId, {
        id: this.state.currentId,
        style: this.state.style
      }).then((response) => {
        console.log(response.data);
      }).catch((response) => {
        console.log(response);
      });
    }
    
	  this.props.onClose(e);
	  e.preventDefault();
	  
  }
  
  handleMenuButtonEvent(event)
  {
    this.setState(state => ({menuShow: !state.menuShow}));
  }
  
  render() {
    return (
    <div className="editorPage">
      <div className="outputWrapper">
        <div className="menu">
          <a href="" className="returnButton" onClick={this.handleCloseEvent}><LeftArrowImg className="img leftArrow"/></a>
          <button className="menuButton" onClick={this.handleMenuButtonEvent}><MenuImg /></button>
        </div>
        
        <div className="output">
            <Element style={this.state.style} disableControls={true}/>
        </div>
      </div>
      
      <EditorPanel show={this.state.menuShow} onValueChange={this.handleValueChange} style={this.state.style} onSubmit={this.handleSubmitEvent}/>
    </div>
    );
  }
}

export default Editor;
