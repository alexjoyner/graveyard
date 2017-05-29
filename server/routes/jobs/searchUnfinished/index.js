import {Job} from '../../../utils';

export const searchUnfinished = (req, res, next) => {
	Job.searchUnfinished(req.params.searchTerm, (err, jobs) => {
		if(err) return next(err);
		res.status(200).send(jobs);
	});
};
