import React from 'react';
import {CheckInForm} from '../CheckInForm';
import {NavBar} from '../../Utils/page/NavBar';
import {Footer} from '../../Utils/page/Footer';
import {Notification} from '../../Utils/Notification';
require('./_.sass');

const CheckInUI = (props) => {
	let {postCheckIn} = props;
	let showNotif = true;
	let successNotif = (showNotif)? <Notification {...props}/> : null;
	const createClient = (data) => {
		showNotif = false;
		postCheckIn(data);
	};
	return (
		<div>
			<NavBar/>
			<CheckInForm {...props} onSubmit={createClient}/>
			{successNotif}
			<Footer/>
		</div>
	);
};

export {CheckInUI};
