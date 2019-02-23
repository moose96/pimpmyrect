import React, { Component } from 'react';
import './App.css';
//import Gallery from './Gallery.js';
import Editor from './Editor.js';
import Element from './Element.js';

import svgPlusItem from './img/plus-black-symbol.svg';

/*some elements read from database: */
const el = [
	{
		id: 0,  //default element style
		style: {
			backgroundColor: '#ff0000',
			width: 100,
			height: 100,
			borderRadius: 10
		}
	},
	{
		id: 1,
		style: {
			backgroundColor: '#f40000',
			width: 100,
			height: 100,
			borderRadius: 10
		}
	},
	{
		id: 2,
		style: {
			backgroundColor: '#00ff34',
			width: 160,
			height: 160,
			borderRadius: 0
		}
	},
	{
		id: 3,
		style: {
			backgroundColor: '#3c54aa',
			width: 40,
			height: 40,
			borderRadius: 20
		}
	},
]

class App extends Component {
  constructor(props) {
    super(props);
	this.handleElementClick = this.handleElementClick.bind(this);
	this.handleEditorClose = this.handleEditorClose.bind(this);
	
	this.state = {
		editorPage: false,
		currentElement: 0,
		elements: el
	}
  }
  
  //event handler when user clicks any element
  handleElementClick(key) {
	  this.setState({
		  editorPage: true,
		  currentElement: key
	  });
  }
  
  //event handler when user closes editor 
  handleEditorClose(e) {
	  this.setState({editorPage: false});
  }
  
  render() {
	
    //store this var to access it in map function
    let _this=this;
	
    //create element list from this.state.elements, wchich was loaded from datababse
    const elementList = this.state.elements.map(function(element,index){
      if(index>0)
        return (<Element key={element.id} id={element.id} style={element.style} onClick={_this.handleElementClick}/>);
    });
	
    //style for new element "button". it will be change to class name
    const newElementStyle = {
			backgroundColor: '#c0c0c0',
			width: 100,
			height: 150,
			borderRadius: 0
		};
    
    //create header element
    const headerElement = <header><h1>Pimp my rect!</h1></header>
  
    //if this.state.editorPage is true, view editor...
    if(this.state.editorPage) {
      return (
        <Editor onClose={this.handleEditorClose} element={this.state.elements[this.state.currentElement]}/>
      );
    } else { //... or view gallery
      return (
        <div className="app">
          {headerElement}
          <div className="gallery">
            {elementList}
		  
            <Element key={0} id={0} style={newElementStyle} onClick={this.handleElementClick}>
              <img alt="+" src={svgPlusItem} style={{width: '70%'}} />
            </Element>
          </div>
        </div>
      );
    }
  }
}

export default App;
