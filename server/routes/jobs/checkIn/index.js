import {Job, NO_DESC, NO_CLIENT_NAME, success} from '../../../utils';

export function checkIn(req, res, next){
	let clientInfo = req.body;
	/*Sanitize*/
	if(!clientInfo.clientName || clientInfo.clientName === ""){
		return next(NO_CLIENT_NAME)
	}
	if(!clientInfo.problemDesc || clientInfo.problemDesc === ""){
		return next(NO_DESC)
	}
	let client = new Job(clientInfo);
	client.checkIn((err) => {
		if(err) return next(err);
		res.status(200).send(success('Job created'));
	});
}
