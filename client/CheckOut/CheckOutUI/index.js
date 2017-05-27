import React from 'react';
import {NavBar} from '../../Utils/page/NavBar';
import {Footer} from '../../Utils/page/Footer';
import {Notification} from '../../Utils/Notification';
import {CheckOutForm} from '../CheckOutForm'
require('./_.sass');


const CheckOutUI = (props) => {
	const {checkOutClient, showNotif, hideNotif} = props;
	const completeClient = (data) => {
		checkOutClient(data).data.then(() => {
			setTimeout(() => {
				hideNotif();
			}, 5000)
		});
	};
	return (
		<div>
			<NavBar/>
			<CheckOutForm {...props} onSubmit={completeClient}/>
			{((showNotif)? <Notification {...props} header="Success!" message="Client Checked Out!"/> : null)}
			<Footer/>
		</div>
	);
};

export {CheckOutUI};
