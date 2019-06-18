import React from 'react';

import logo from '../../logo.svg';
import './Header.css';

const Header = (props) => {
	return( 
		<div className = "Header">
			<img src={logo} className="logo" alt="logo" />
		</div>
	)
}

export default React.memo(Header)

