import React from 'react';
import {JobPosting} from '../../Utils/Job/JobPosting';
require('./_.sass');
require('../../Utils/Form/Container/_.sass');
require('../../Utils/Form/Body/_.sass');


const SearchResults = (props) => {
	const {checkOutClient, hideNotif, showNotif, removeJob} = props;
	const completeClient = (data) => {
		checkOutClient(data).then(({payload}) => {
			let {notifInfo} = payload.data;
			if(notifInfo.status === 'success'){
				removeJob(data.index);
			}
			showNotif(notifInfo);
			setTimeout(() => {
				hideNotif();
			}, 5000)
		});
	};
	return (
		<div>
			{props.jobs.map((job, i) => (
				<div key={i}>
					<JobPosting
						onSubmit={data =>{
							completeClient({
								index: i,
								_id: job._id,
								body: {...data}
							})
						}}
						form={'JobPosting' + i}
						props={{
							job
						}}/>
				</div>
			))}
		</div>
	);
};

export {SearchResults};
