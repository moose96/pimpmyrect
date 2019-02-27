import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery.js';
import Editor from './Editor.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleEditorClose = this.handleEditorClose.bind(this);
    this.handleGalleryElementClick = this.handleGalleryElementClick.bind(this);
	
    this.state = {
      editorPage: false,
      currentElement: {}
    }
  }
  
  //event handler when user closes editor 
  handleEditorClose(e) {
	  this.setState({editorPage: false});
  }
  
  handleGalleryElementClick(element) {
	  this.setState({
		  editorPage: true,
		  currentElement: element
	  });
  }
  
  render() {
    //create header element
    const headerElement = <header><h1>Pimp my rect!</h1></header>;
  
    //if this.state.editorPage is true, view editor...
    if(this.state.editorPage) {
      return (
        <Editor onClose={this.handleEditorClose} element={this.state.currentElement}/>
      );
    } else { //... or view gallery
      return (
        <div className="app">
          {headerElement}
          <Gallery onClick={this.handleGalleryElementClick}/>
        </div>
      );
    }
  }
}

export default App;
