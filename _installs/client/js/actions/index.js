/*
import axios from 'axios';
// This file contains our Action Creators

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST_DETAIL = 'FETCH_POST_DETAIL';
export const POST_NEW_QUESTION = 'POST_NEW_QUESTION';
export const POST_NEW_LINK = 'POST_NEW_LINK';
export const SEARCH_POSTS = 'SEARCH_POSTS';

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

export function fetchPostDetail(postId) {
	const request = axios.get(`${ROOT_URL}/post/detail/${postId}`);

	return {
		type: FETCH_POST_DETAIL,
		payload: request
	};
}
export function searchPosts(searchTerm) {
	const request = axios.get(`${ROOT_URL}/posts/search/${searchTerm}`);

	return {
		type: SEARCH_POSTS,
		payload: request
	};
}

export function createNewPost(props) {
	const config = {
		timeout: 1000,
		headers: {
			'x-access-token': (localStorage.getItem('token')) ? localStorage.getItem('token') : null
		}
	};
	const request = axios.post(`${ROOT_URL}/new/post`, props, config);

	return {
		type: POST_NEW_QUESTION,
		payload: request
	}
}
export function createNewLink(props) {
	const config = {
		timeout: 1000,
		headers: {
			'x-access-token': (localStorage.getItem('token')) ? localStorage.getItem('token') : null
		}
	};
	const request = axios.post(`${ROOT_URL}/new/postlink`, props, config);

	return {
		type: POST_NEW_LINK,
		payload: request
	}
}
*/
