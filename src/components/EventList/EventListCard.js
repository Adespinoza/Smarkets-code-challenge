import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Tag } from 'antd';

// Instances of cards
const EventListCard = props => (
	<Link to={`/events/${props.id}`}>
		<Card title={props.name ? props.name : props.short_name} style={{ width: 300, height:350, overflowY:'scroll', display: 'inline-block', 'wordWrap': 'break-word'}}> 
			<p><b>Date: </b>{props.start_time}</p>
			<p>{props.description ? props.description : props.special_rules}</p>
	    	<Tag color="volcano">{props.type}</Tag>
	    	<Tag color="green">{props.state}</Tag>
		</Card>
	</Link>
);

export default EventListCard