import axios from 'axios';

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3';

// Return object of popular event ids 
export async function getPopularEvents() {
	try {
		return axios.get(`/popular/event_ids/?limit=50`);
	} catch (err) {
		throw new Error('Failed to contact API: ', err)
	}
}

// Returns object of eventInfo from eventIds
export async function getEventInfo(eventIds) {
	try {
		return axios.get(`/events/${eventIds.join(',')}/`);
	} catch (err) {
		throw new Error('Failed to contact API: ', err)
	}
}
