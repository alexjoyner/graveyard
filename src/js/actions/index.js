import axios from 'axios';
// This file contains our Action Creators

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://localhost:8080';

export default function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts/hot/1`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}
