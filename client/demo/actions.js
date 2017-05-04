import axios from 'axios';

export const POST_PREORDER = 'POST_PREORDER';
export const POST_COMMENT = 'POST_COMMENT';
const ROOT_URL = 'http://localhost:8080';

const preOrderApp = () => {
	return {
		type: POST_PREORDER
	};
};
const addComment = (comment) => {
	return {
		type: POST_COMMENT,
		data: comment
	}
};

export {preOrderApp, addComment};
