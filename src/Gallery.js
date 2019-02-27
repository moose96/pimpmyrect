import React from 'react';
import Element from './Element.js'
import Toolbar from './Toolbar.js';

import svgPlusItem from './img/plus-black-symbol.svg';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.handleElementClick = this.handleElementClick.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    
    this.newElement = {
      id: 0,
      style: {
        backgroundColor: '#ff0000',
        width: 100,
        height: 100,
        borderRadius: 10
      }
    }
    
    this.mappedId = [];
		
		this.state = {
			elements: [],
      galleryClassName: 'gallery',
			filter: {
			backgroundColor: { //only equals mode
				active: false,
				value: '#f40000' 
			},
			width: {
				active: false,
				greater: true,
				value: 100
			},
			height: {
				active: false,
				greater: true,
				value: 100
			},
			borderRadius: {
				active: false,
				greater: true,
				value: 10
			}
		}
		};
	}
	
	componentDidMount() {
		const axios = require('axios');
		/*elements read from database: */
		
		axios.get('http://localhost/learning/react-zadanka/pimpmyrect/public/dbservice?get')
		.then((response) => {
			console.log(response.data);
			this.setState({elements: response.data});
		})
		.catch((response) =>{
			console.log(response);
		});
		
	}
	
	//event handler when user clicks any element
	handleElementClick(key) {
    if(key == 0)
      this.props.onClick(this.newElement);
    else
      this.props.onClick(this.state.elements[this.mappedId[key]]);
	}
  
  handleViewChange(type) {
    var classnames=require('classnames');
    
    this.setState({
      galleryClassName: classnames({
        gallery: true,
        list: type
      })});
  }
  
	//function which renders elements
	drawElements(element,index) {
    this.mappedId[element.id] = index;
		return (
      <div className="galleryElement">
        <Element key={element.id} id={element.id} style={element.style} onClick={this.handleElementClick}/>
      </div>
    );
	}
  
	
	
	render() {

		//create element list from this.state.elements, wchich was loaded from datababse
		const elementList = this.state.elements.map(this.drawElements,this);
	
    	
		const newElementStyle = {
			backgroundColor: '#c0c0c0',
			width: 100,
			height: 100,
			borderRadius: 0
		};
		
		return(
			<div className="app">
				<div className={this.state.galleryClassName}>
					<Toolbar filters={this.state.filter} onViewButtonClick = {this.handleViewChange}/>
          {elementList}
					<Element className="new" key={0} id={0} style={newElementStyle} onClick={this.handleElementClick} disableControls={true}>
						<img alt="+" src={svgPlusItem} style={{width: '70%'}} />
					</Element>
				</div>
			</div>
		);
	}
}

export default Gallery;

/*
<div>Icons made by 
<a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from 
<a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> 
is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
</div>
*/