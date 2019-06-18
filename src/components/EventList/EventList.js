import React from 'react';
import { Skeleton } from 'antd';

import EventListCard from './EventListCard';

import { getEventInfo } from '../../utils/eventsAPI';

class EventList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			details: {},
			loading: true,
		}
	}

	componentWillMount() {
		getEventInfo(this.props.popularEvents).then(res => {
			this.setState({details: res.data.events, loading: false})
			console.log(this.state.details);
		})
	}

	renderList = () => {
		return(
			this.state.details.map(event => 
				<EventListCard
					key={event.slug}
					name={event.name}
					description={event.description}
					special_rules={event.special_rules}
					id={event.id} 
					state={event.state}
					start_time={event.start_date}
					league={event.slug}
					type={event.type}
				/>)
		)
	}

	render() {
		return ((this.state.loading) ? <Skeleton active/> : this.renderList());
	}
}

export default EventList