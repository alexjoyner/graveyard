import {Job, NO_TECH_SOLUTION, success} from '../../../utils';
const checkOut = (req, res, next) => {
	const {id} = req.params;
	const {techSolution} = req.body;
	if(!techSolution || techSolution === ''){
		return next(NO_TECH_SOLUTION);
	}

	Job.checkOut({
		id, techSolution
	}, (err) => {
		if (err) return next(err);
		res.status(200).send(success('Job checked out'));
	});
};


export {checkOut};
