import {Job, NO_TECH_SOLUTION, NO_TECH_NAME, success} from '../../../utils';
const checkOut = (req, res, next) => {
	const {id} = req.params;
	const solutionInfo = {...req.body};
	if(!solutionInfo.techName || solutionInfo.techName === ''){
		return next(NO_TECH_NAME);
	}
	if(!solutionInfo.techSolution || solutionInfo.techSolution === ''){
		return next(NO_TECH_SOLUTION);
	}
	Job.checkOut({
		id, ...solutionInfo
	}, (err) => {
		if (err) return next(err);
		res.status(200).send(success('Job checked out'));
	});
};


export {checkOut};
