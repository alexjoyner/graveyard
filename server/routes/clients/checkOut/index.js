import {Client, NO_CLIENT_NAME} from '../../../utils';
const checkOut = (req, res, next) => {
	let clientInfo = req.body;
	/*Sanitize*/
	if (!clientInfo.clientName || clientInfo.clientName === "") {
		return next(NO_CLIENT_NAME)
	}
	// if (!clientInfo.problemDesc || clientInfo.problemDesc === "") {
	// 	return next({
	// 		status: 400,
	// 		message: "No Problem description"
	// 	})
	// }
	let client = new Client(clientInfo);
	client.checkOut((err) => {
		if (err) return next(err);
		res.status(200).send({
			notifInfo: {
				notifId: 1,
				header: 'Success',
				message: 'Client checked out',
				status: 'success'
			}
		}).end();
	});
};


export {checkOut};
