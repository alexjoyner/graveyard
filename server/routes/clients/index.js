import {Client} from '../../utils/client';

function checkInNewClient(req, res, next){
	let client = new Client(req.body);
	client.saveClient((err) => {
		if(err) return next(err);
		res.status(200).end();
	});
}

export {checkInNewClient};
