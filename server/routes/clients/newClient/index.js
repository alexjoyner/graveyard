import {Client, NO_DESC, NO_CLIENT_NAME} from '../../../utils';

function newClient(req, res, next){
	let clientInfo = req.body;
	/*Sanitize*/
	if(!clientInfo.clientName || clientInfo.clientName === ""){
		return next(NO_CLIENT_NAME)
	}
	if(!clientInfo.problemDesc || clientInfo.problemDesc === ""){
		return next(NO_DESC)
	}
	let client = new Client(clientInfo);
	client.saveClient((err) => {
		if(err) return next(err);
		res.status(201).send({
			notifInfo: {
				notifId: 1,
				header: 'Success!',
				message: 'Client created',
				status: 'success'
			}
		}).end();
	});
}

export {newClient};
