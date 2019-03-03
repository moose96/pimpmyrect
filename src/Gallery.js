import React from 'react';
import Element from './Element.js'
import Toolbar from './Toolbar.js';

import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

import svgPlusItem from './img/plus-black-symbol.svg';

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.handleElementClick = this.handleElementClick.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleFiltersChange = this.handleFiltersChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.getData = this.getData.bind(this);
    
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
      },
      sort: {
        order: null,
        direction: null
      }
		};
	}
  
  getData() {
    const axios = require('axios');
		/*elements read from database: */
		
		axios.get('http://localhost/learning/react-zadanka/pimpmyrect/public/dbservice?get',{
      params: this.state.sort.order!==null?this.state.sort:null
    })
		.then((response) => {
			console.log(response.data);
			this.setState({elements: response.data});
		})
		.catch((response) =>{
			console.log(response);
		});
  }
	
	componentDidMount() {
		this.getData();
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
  
  handleFiltersChange(_filters) {
    this.setState({filter: _filters});
  }
  
  handleSortChange(value) {
    this.setState({sort: value});
    this.getData();
  }
  
  correctedStyle(style) {
    if(style.height>250) {
      var scale = 250/style.height;
      var newStyle = Object.assign({},style);
      
      newStyle.width*=scale;
      newStyle.height*=scale;
      return newStyle;
    }
    return style;
  }
  
	//function which renders elements
	drawElements(element,index) {
    this.mappedId[element.id] = index;
    
    let filters = this.state.filter;
    if((!filters.backgroundColor.active||(filters.backgroundColor.active&&filters.backgroundColor.value==element.style.backgroundColor)) &&
        (!filters.width.active || (filters.width.active&&element.style.width>filters.width.value))  && 
        (!filters.height.active || (filters.height.active&&element.style.height>filters.height.value)) && 
        (!filters.borderRadius.active || (filters.borderRadius.active&&element.style.borderRadius>filters.borderRadius.value)))
      return (
        <div className="galleryElement">
          <Element key={element.id} id={element.id} style={this.correctedStyle(element.style)} onClick={this.handleElementClick}/>
        </div>
      );
    else
      return null;
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
				<div className={this.state.galleryClassName}>
					<Toolbar filters={this.state.filter} sortOptions={this.state.sort} 
            onViewButtonClick = {this.handleViewChange} onFiltersChange={this.handleFiltersChange} onSelectValueChange={this.handleSortChange}/>
          {elementList}
          <div className="galleryElement">
            <Element className="new" key={0} id={0} style={newElementStyle} onClick={this.handleElementClick} disableControls={true}>
              <img alt="+" src={svgPlusItem} style={{width: '70%'}} />
            </Element>
          </div>
          <Pagination className="pagination d-flex justify-content-center w-100">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
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