import React from 'react';
import { Skeleton, Tag } from 'antd';

import { getEventInfo } from '../utils/eventsAPI';

class EventInfoContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			details: {},
			loading: true
		}
	}

	componentWillMount() {
    	const { id } = this.props.match.params
    	getEventInfo([id]).then(res => 
    		this.setState({ 
    			details: res.data.events[0], 
    			loading: false 
    		})
    	)
    }

	render() {
		return (
			(this.state.loading) ? <Skeleton active/> : 
			<div>
				{console.log(this.state.details)}
				<h1>{this.state.details.name}</h1>
				<h2>{this.state.details.short_name}</h2>
				<h2>{this.state.details.start_date}</h2>
				<p>{this.state.details.description}</p>
				<p>{this.state.details.special_rules}</p>
				<Tag color="volcano">{this.state.details.type}</Tag>
	    		<Tag color="green">{this.state.details.state}</Tag>
	    		<Tag color="blue">{this.state.details.slug}</Tag>
			</div>
		);
	}
}

export default EventInfoContainer