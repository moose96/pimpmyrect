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
    
    this.mappedId = [];
		
		this.state = {
			elements: [],
      galleryClassName: this.props.className,
			filter: CONFIG.defaultFilter,
      sort: CONFIG.defaultSort,
		};
	}
  
  getData() {
    const axios = require('axios');
		/*elements read from database: */
		
		axios.get(CONFIG.dbServicePath+'?get',{
      params: this.state.sort.order!==null?this.state.sort:null
    })
		.then((response) => {
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
    
    this.setState({galleryClassName: newGalleryClassName});
    this.props.onViewChange(newGalleryClassName);
  }
  
  handleFiltersChange(_filters) {
    this.setState({filter: _filters});
  }
  
  handleSortChange(value) {
    this.setState({sort: value});
    this.getData();
  }
  
  
	//function which renders elements
	drawElements(element,index) {
    this.mappedId[element.id] = index;
    
    return (
      <GalleryElement element={element} filters={this.state.filter} onClick={this.handleElementClick}/>
    );
	}
  
	
	
	render() {

		return(
				<div className={this.state.galleryClassName}>
        
					<Toolbar filters={this.state.filter} sortOptions={this.state.sort} 
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