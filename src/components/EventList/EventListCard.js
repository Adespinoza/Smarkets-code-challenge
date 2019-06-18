import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Tag } from 'antd';

import './EventListCard.css';
// Instances of cards
const EventListCard = props => (
	<Link to={`/events/${props.id}`}>
		<Card title={props.name ? props.name : props.short_name} className="Card"> 
			<p><b>Date: </b>{props.start_time}</p>
			<p>{props.description ? props.description : ""}</p>
			<p>{props.special_rules ? props.special_rules : ""}</p>
	    	<Tag color="volcano">{props.type}</Tag>
	    	<Tag color="green">{props.state}</Tag>
	    	<Tag color="blue">{props.league}</Tag>
		</Card>
	</Link>
);

export default EventListCard