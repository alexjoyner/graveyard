import {Client} from '../../../utils';

const checkOut = (req, res, next) => {
	let clientInfo = req.body;
	/*Sanitize*/
	if (!clientInfo.clientName || clientInfo.clientName === "") {
		return next({
			status: 400,
			message: "No client name sent"
		})
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
		res.status(200).end();
	});
};


export {checkOut};
