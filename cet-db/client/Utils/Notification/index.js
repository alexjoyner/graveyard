import React from 'react';
import {Success} from '../Icons/Success';
import {Error} from '../Icons/Error';
require('./_.sass');


const Notification = (props) => {
	let {header, message, status} = props;
	return (
		<div>
			<div className="Notification">
				<div className="iconContainer">
					{(status === 'success')?<Success /> : <Error/>}
				</div>
				<div className="contentContainer">
					<h1 className="statusHeader">{header}</h1>
					<div className="message">{message}</div>
				</div>
			</div>
		</div>
	);
};

export {Notification};
