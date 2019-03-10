import React from 'react';

import CONFIG from './config.json';
import Element from './Element.js'
import Toolbar from './gallery/Toolbar.js';
import GalleryElement, {NewGalleryElement} from './gallery/GalleryElement.js';

import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';


class Gallery extends React.Component {
	constructor(props) {
		super(props);
    
		this.handleElementClick = this.handleElementClick.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.handleFiltersChange = this.handleFiltersChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.getData = this.getData.bind(this);
    this.sortElements = this.sortElements.bind(this);
    
    this.mappedId = [];
		
		this.state = {
			elements: [],
      galleryClassName: this.props.className,
			filter: CONFIG.defaultFilter,
      listView: false
		};
	}
  
  getData() {
    const axios = require('axios');
		/*elements read from database: */
		
		axios.get('/data/pimpmyrect.json')
		.then((response) => {
      console.log(response.data);
      
      let _elements = response.data;
      _elements.sort((a,b) => {
        return this.sortElements(a,b,CONFIG.defaultSort);
      });
      
			this.setState({elements: _elements});
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
      this.props.onClick(CONFIG.newElement);
    else
      this.props.onClick(this.state.elements[this.mappedId[key]]);
	}
  
  handleViewChange(type) {
    var classnames=require('classnames');
    var newGalleryClassName = 
      classnames({
        gallery: true,
        list: type
      });
    
    this.setState({
      galleryClassName: newGalleryClassName,
      listView: type});
    this.props.onViewChange(newGalleryClassName);
  }
  
  handleFiltersChange(_filters) {
    this.setState({filter: _filters});
  }
  
  handleSortChange(value) {
    let _elements = this.state.elements;
    _elements.sort((a,b) => {
      return this.sortElements(a,b,value);
    });
    
    this.setState({elements: _elements});
  }
  
  
	//function which renders elements
	drawElements(element,index) {
    this.mappedId[element.id] = index;
    
    return (
      <GalleryElement element={element} filters={this.state.filter} listView={this.state.listView} onClick={this.handleElementClick}/>
    );
	}
  
	sortElements(first,second,sort) {
    let _first,_second;
    
    
    if(sort.order === 'id') {
      _first = first.id;
      _second = second.id;
    }
    else if(sort.order === 'square') {
      _first = first.style.width*first.style.height;
      _second = second.style.height*second.style.height;
    }
    else if(sort.order === 'radius') {
      _first = first.style.borderRadius;
      _second = second.style.borderRadius;
    }
    
    
    if(sort.direction === null)
      return _first-_second;
    else if(sort.direction === 'desc')
      return _second - _first;
  }
	
	render() {

		return(
				<div className={this.state.galleryClassName}>
        
					<Toolbar filters={this.state.filter}  
            onViewButtonClick = {this.handleViewChange} onFiltersChange={this.handleFiltersChange} onSelectValueChange={this.handleSortChange}/>
            
          {this.state.elements.map(this.drawElements,this) /*add elements from database*/}
          
          <NewGalleryElement onClick={this.handleElementClick} />
            
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