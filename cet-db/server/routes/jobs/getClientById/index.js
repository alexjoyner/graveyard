import {Job} from '../../../utils/job';

const getClientById = (req, res, next) => {
	Job.getClient(req.params.id, (err, result) => {
			if(err) return next(err);
			res.status(200).send(result);
	})
};

export {getClientById};
