const POST_PREORDER = 'POST_PREORDER';

const ROOT_URL = 'http://localhost:8080';

const preOrderApp = (preOrders) => {
	return {
		type: POST_PREORDER,
		payload: {
			data: {
				preOrdersNow: preOrders + 1
			}
		}
	};
};

export {
	POST_PREORDER,
	preOrderApp
}
