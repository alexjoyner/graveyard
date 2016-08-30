import axios from 'axios';
// This file contains our Action Creators

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://localhost:8080';

export default function fetchPosts(feedName) {
	const FEED = (feedName)? feedName : 'hot';
	const request = axios.get(`${ROOT_URL}/posts/${FEED}/1`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}
