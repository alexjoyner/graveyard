import React from 'react';
import {NavBar} from '../../Utils/page/NavBar';
import {Footer} from '../../Utils/page/Footer';
import {Notification} from '../../Utils/Notification';
import {CheckOutForm} from '../CheckOutForm';
import {SearchResults} from '../SearchResults';
require('./_.sass');


const CheckOutUI = (props) => {
	const {checkOutClient, showNotif, hideNotif} = props;
	const {notifId} = props.Notifs;
	const renderNotif = () => {
		if (notifId === 1) {
			return (
				<Notification {...props}{...props.Notifs.content}/>
			)
		}
	};
	return (
		<div id="CheckOutUi">
			<NavBar/>
			<CheckOutForm {...props}/>
			<SearchResults {...props}/>
			{renderNotif()}
			<Footer/>
		</div>
	);
};

export {CheckOutUI};
