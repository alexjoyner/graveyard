import React from 'react';
import MtVoteCell from '../vote-cell/index';
import FontAwesome from 'react-fontawesome';
require('./_.sass');
export default ({ post }) => {
	return (
		<div className="question-edit-cell-container">
			<div className="question-edit-cell">
				<MtVoteCell className="mt-action-bar-item" post={post}/>
				<button className="ro-action-bar-item mt-btn mt-btn-info">
					<FontAwesome name="edit" />
				</button>
				{/*
				**** This would only be displayed if the user was in edit mode***
				<button className="ro-action-bar-item mt-btn mt-btn-danger">
					Cancel
				</button>*/}
				<button className="ro-action-bar-item  mt-btn mt-btn-danger">
					<FontAwesome name="times" />
				</button>
				{/*<mt-follow-button className="ro-action-bar-item" post={post}/>*/}
			</div>
			<br className="clear" />
		</div>
	);
}