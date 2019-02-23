import React from 'react';

class Element extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleCloseClick = this.handleCloseClick.bind(this);
		this.handleElementClick = this.handleElementClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    
    this.state = {
      elementMouseOver: false
    }
	}
	
	handleCloseClick(e) {
    alert("removed");
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
                    hidden: !this.state.elementMouseOver});
    
		return (
			<div className="element" id={this.props.id} style={this.props.style} onClick={this.handleElementClick} 
            onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            
				<button className={buttonClassName} onClick={this.handleCloseClick}>X</button>
				{this.props.children}
			</div>
		);
	}
}

export default Element;