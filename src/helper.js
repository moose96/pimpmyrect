import React from 'react';

import {ReactComponent as SquareIcon} from './img/340-checkbox-unchecked.svg';
import {ReactComponent as CircleIcon} from './img/343-radio-unchecked.svg';


export function RangeIcons() {
	return(
		<div className="rangeIcons">
      <SquareIcon />
      <CircleIcon />
    </div>
	);
}

export function Header() {
  return <header><h1>Pimp my rect!</h1></header>;
}