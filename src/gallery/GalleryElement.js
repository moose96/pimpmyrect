import React from 'react';

import CONFIG from './../config.json';
import Element from './../Element.js';

import {ReactComponent as SvgPlusItem} from './../img/plus-black-symbol.svg';

class GalleryElement extends React.Component
{
  constructor(props) {
    super(props);
    
    this.Color = require('color');
    
    this.handleElementClick = this.handleElementClick.bind(this);
  }
  
  handleElementClick(value) {
    this.props.onClick(value);
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
  
  equalBackgroundColor() {
    let backgroundColorIndex = this.props.filters.backgroundColor.value;
    let backgroundValue = {
      start: CONFIG.colorsTable[backgroundColorIndex].hueStart,
      end: CONFIG.colorsTable[backgroundColorIndex].hueEnd
    };
    
    let elementBackgroundHsl = this.Color(this.props.element.style.backgroundColor).hsl();
    let elementBackgroundValue = 0;
    
    
    if(CONFIG.colorsTable[backgroundColorIndex].equalMode==='hue')
      elementBackgroundValue = elementBackgroundHsl.hue();
    
    else if (CONFIG.colorsTable[backgroundColorIndex].equalMode==='saturation')
      elementBackgroundValue = elementBackgroundHsl.saturation();
    
    else if (CONFIG.colorsTable[backgroundColorIndex].equalMode==='lightness')
      elementBackgroundValue = elementBackgroundHsl.lightness();
    
    
    return (elementBackgroundValue>=backgroundValue.start &&
            elementBackgroundValue<=backgroundValue.end);
  }
  
  render() {
    var filters = this.props.filters;
    
     if((!filters.backgroundColor.active||(filters.backgroundColor.active&&this.equalBackgroundColor())) &&
        (!filters.width.active || (filters.width.active&&this.props.element.style.width>filters.width.value))  && 
        (!filters.height.active || (filters.height.active&&this.props.element.style.height>filters.height.value)) && 
        (!filters.borderRadius.active || (filters.borderRadius.active&&this.props.element.style.borderRadius>filters.borderRadius.value)))
        
      return(
        <div className="galleryElement">
        
          <div className="elementWrapper">
            <Element key={this.props.element.id} id={this.props.element.id} style={this.correctedStyle(this.props.element.style)} onClick={this.handleElementClick}/>
          </div>
          
          <div className="galleryElementInfo">
            <h3><a href="" onClick={this.handleElementClick}>Element has ID: {this.props.element.id}</a></h3>
            <p>Background color: {this.props.element.style.backgroundColor}</p>
            <p>Width: {this.props.element.style.width}</p>
            <p>Height: {this.props.element.style.height}</p>
            <p>Border radius: {this.props.element.style.borderRadius}</p>
          </div>
          
        </div>
      );
    else
      return null;
  }
  
}


export function NewGalleryElement(props) {
  const newElementStyle = {
			backgroundColor: '#c0c0c0',
			width: 100,
			height: 150,
			borderRadius: 0
		};
    
    return (
      <div className="galleryElement">
        <Element className="new" key={0} id={0} style={newElementStyle} onClick={props.onClick} disableControls={true}>
          <SvgPlusItem />
        </Element>
      </div>
    );
}

export default GalleryElement;