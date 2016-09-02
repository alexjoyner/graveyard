import React from 'react';
import MtVoteCell from '../vote-cell/index';
require('./_.sass');
export default ({ post }) => {
	return (
		<div className="question-edit-cell-container">
			<div className="question-edit-cell">
				<MtVoteCell className="mt-action-bar-item" post={post}/>
				<button className="ro-action-bar-item mt-btn mt-btn-info">
					<i className="fa fa-edit">
					</i>
				</button>
				{/*
				**** This would only be displayed if the user was in edit mode***
				<button className="ro-action-bar-item mt-btn mt-btn-danger">
					Cancel
				</button>*/}
				<button className="ro-action-bar-item  mt-btn mt-btn-danger">
					<i className="fa fa-close">
					</i>
				</button>
				{/*<mt-follow-button className="ro-action-bar-item" post={post}/>*/}
			</div>
			<br className="clear" />
		</div>
	);
}