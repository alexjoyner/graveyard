import axios from 'axios';
// This file contains our Action Creators

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://localhost:8080';

export function fetchGeneralFeedPosts(feedName) {
	const FEED = (feedName)? feedName : 'hot';
	const request = axios.get(`${ROOT_URL}/posts/${FEED}/1`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}
export function fetchTopicFeedPosts(topicId) {
	const request = axios.get(`${ROOT_URL}/posts/topic/${topicId}/1`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

