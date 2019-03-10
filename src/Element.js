import React from 'react';

import CONFIG from './config.json';
import './Element.scss';

class Element extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleCloseClick = this.handleCloseClick.bind(this);
		this.handleElementClick = this.handleElementClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
    
		this.state = {
			elementMouseOver: false,
			disableControls: this.props.disableControls!==null?this.props.disableControls:false
		}
	}
	
	handleCloseClick(e) {
    const axios = require('axios');
    
    axios.get(CONFIG.dbServicePath+'?delete', {
      params: {
        id: this.props.id
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((response) =>{
      console.log(response);
    });
    
		e.preventDefault();
	}
	
	handleElementClick(e) {
		this.props.onClick(this.props.id);
	}
	
	handleMouseEnter(e) {
		this.setState({elementMouseOver: true});
	}
  
  handleMouseLeave(e) {
    this.setState({elementMouseOver: false});
  }
	
	render() {
    var classNames = require("classnames");
	
    var buttonClassName = 
      classNames({closeButton: true,
                  hidden: this.state.disableControls?true:!this.state.elementMouseOver});
	
    var infoClassName = 
      classNames({elementInfo: true,
                  hidden: this.state.disableControls?true:!this.state.elementMouseOver});
	
    var elementClassName = 
      classNames({element: true,
                  new: this.props.className==='new'});
    
    
		return (
			<div className="element" id={this.props.id} style={this.props.style} 
            onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            
				<button className={buttonClassName} onClick={this.handleCloseClick}>x</button>
				<div className={infoClassName} onClick={this.handleElementClick}>
					<p>Click to edit!</p>
				</div>
        
				{this.props.children}
        
			</div>
		);
	}
}

export default Element;