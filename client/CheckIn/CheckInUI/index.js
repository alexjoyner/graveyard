import React from 'react';
import {CheckInForm} from '../CheckInForm';
import {NavBar} from '../../Utils/page/NavBar';
import {Footer} from '../../Utils/page/Footer';
import {Notification} from '../../Utils/Notification';
require('./_.sass');


const CheckInUI = (props) => {
	let {postCheckIn, hideNotif, showNotif} = props;
	let {notifId} = props.Notifs;
	const createClient = (data) => {
		postCheckIn(data).data.then(({data}) => {
			showNotif(data.notifInfo);
			setTimeout(() => {
				hideNotif();
			}, 5000)
		});
	};
	const renderNotif = () => {
		if (notifId === 1) {
			return (
				<Notification {...props}{...props.Notifs.content}/>
			)
		}
	};
	return (
		<div>
			<NavBar/>
			<CheckInForm {...props} onSubmit={createClient}/>
			{renderNotif()}
			<Footer/>
		</div>
	);
};

export {CheckInUI};
