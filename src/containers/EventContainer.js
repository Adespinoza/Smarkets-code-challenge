import React from 'react';
import { Empty } from 'antd';

import { getPopularEvents } from '../utils/eventsAPI';
import EventList from '../components/EventList/EventList';

class EventContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			events: [],
			loading: true,
		}
	}

	componentDidMount() {
		getPopularEvents().then(res =>
			this.setState={
				events: res.data.popular_event_ids,
				loading: false,
			}).catch(err => {
				this.setState({err, loading: true})	
			})
	}

	render() {
		return((this.state.loading) ? <Empty /> : <EventList />);
	}
}

export default EventContainer