import React from 'react';
import {NavBar} from '../../Utils/page/NavBar';
import {Footer} from '../../Utils/page/Footer';
import {Notification} from '../../Utils/Notification';
import {CheckOutForm} from '../CheckOutForm'
require('./_.sass');


const CheckOutUI = (props) => {
	const {checkOutClient, showNotif, hideNotif} = props;
	const {notifId} = props.Notifs;
	const completeClient = (data) => {
		checkOutClient(data).data.then(({data}) => {
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
			<CheckOutForm {...props} onSubmit={completeClient}/>
			{renderNotif()}
			<Footer/>
		</div>
	);
};

export {CheckOutUI};
