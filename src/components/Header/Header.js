import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './Header.css';

const Header = (props) => {
	return( 
		<Link to={`/`}>
			<div className = "Header">
				<img src={logo} className="logo" alt="logo" />
			</div>
		</Link>
	)
}

export default React.memo(Header)

