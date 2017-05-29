import React from 'react';
require('./_.sass');


const Details = (props) => {
	const job = props._source;
	return (
		<div className="JobDetails">
			<div className="lineHeader">
				CLIENT NAME
			</div>
			<hr/>
			<div className="detailText">
				{job.clientName}
			</div>
			<br/>
			<div className="lineHeader">
				Problem
			</div>
			<hr/>
			<div className="detailText">
				{job.problemDesc}
			</div>
		</div>
	);
};

export {Details};
