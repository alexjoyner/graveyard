import React from 'react';
import {Success} from '../Icons/Success';
require('./_.sass');


const Notification = ({header, message}) => {
	return (
		<div>
			<div className="Notification">
				<div className="iconContainer">
					<Success />
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
