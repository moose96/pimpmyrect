import React, { Component } from 'react';

import {Header} from './helper.js';
import Gallery from './Gallery.js';
import Editor from './Editor.js';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleEditorClose = this.handleEditorClose.bind(this);
    this.handleGalleryElementClick = this.handleGalleryElementClick.bind(this);
    this.handleGalleryViewChange = this.handleGalleryViewChange.bind(this);
	
    this.state = {
      editorPage: false,
      currentElement: {},
      currentGalleryClassName: 'gallery'
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
  
  handleGalleryViewChange(value)
  {
    //this.setState({currentGalleryClassName: value});
  }
  
  render() {
  
    //if this.state.editorPage is true, view editor...
    //
    if(this.state.editorPage) {
      return (
         <div className="app">
          <Header />
          <Editor onClose={this.handleEditorClose} element={this.state.currentElement}/>
        </div>
      );
    } else {
      return (
        <div className="app">
          <Header />
          <Gallery className={this.state.currentGalleryClassName} onClick={this.handleGalleryElementClick} onViewChange={this.handleGalleryViewChange}/>
        </div>
      );
    }
  }
}

export default App;
