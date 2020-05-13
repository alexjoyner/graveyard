import React from 'react';
require('./_.sass');
export default ({ post }) => {
	return (
		<li className="action-bar-item vote-cell">
			<button className="upvote-btn mt-btn mt-btn-success">
				<i className="fa fa-check" />
				<span className={'up-vote-text-post-type-' + post.post_type_id}/>
				<span className="score">{(post.pro_ups + post.con_ups) - post.dwns}</span>
			</button>
			<button className="downvote-btn mt-btn mt-btn-default">
				<i className="fa fa-check"/>
				<span className={'down-vote-text-post-type-' + post.post_type_id}/>
			</button>
		</li>
	);
}