import React from 'react';

class Element extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleCloseClick = this.handleCloseClick.bind(this);
	}
	
	handleCloseClick(e) {
		
	}
	
	render() {
		return (
			<div className="element" style={this.props.style}>
				<button className="closeButton" onClick={this.handleCloseClick}>X</button>
			</div>
		);
	}
}

export default Element;