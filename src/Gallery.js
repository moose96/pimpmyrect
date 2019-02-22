import React from 'react';
import Element from './Element.js'

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			elements: []
		}
	}
	
	render() {
		<div className="gallery">
			//some elements:
			this.state.elements.each(function(/*...*/){
				
			});
		</div>
	}
}