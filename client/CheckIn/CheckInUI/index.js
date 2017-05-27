import React from 'react';
import {CheckInForm} from '../CheckInForm';
import {NavBar} from '../../Utils/page/NavBar';
import {Footer} from '../../Utils/page/Footer';
import {Notification} from '../../Utils/Notification';
require('./_.sass');


const CheckInUI = (props) => {
	let {postCheckIn, hideNotif, showNotif} = props;
	const createClient = (data) => {
		postCheckIn(data).data.then(() => {
			setTimeout(() => {
				hideNotif();
			}, 5000)
		});
	};
	return (
		<div>
			<NavBar/>
			<CheckInForm {...props} onSubmit={createClient}/>
			{((showNotif)? <Notification {...props} header="Success!" message="Client Created"/> : null)}
			<Footer/>
		</div>
	);
};

export {CheckInUI};
