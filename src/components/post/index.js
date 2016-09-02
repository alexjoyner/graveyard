import React from 'react';
import MtVoteCell from '../vote-cell/index';
import MtFollowButton from '../follow-button/index';
import {Link} from 'react-router';
require('./styles/_.sass');
export default ({ post }) => {
	return (
		<div className={`mt-post point-type-`+ post.point_type_id}>
			<div className="mt-post-contents">
				<Link to={'post/'+ post._id}><h2 className="mt-post-title">{post.title}</h2></Link>
				<h3>{post.detail}</h3>
				{(post.source_type_id !== null) ? renderSourceBlock(post) : null}
				{/*<ul className="owner-controls">
					<li>
						<button
							className="mt-btn mt-btn-danger">
							<i className="fa fa-close">
							</i>
						</button>
					</li>
					<li>
						<button
							className="mt-btn mt-btn-info">
							<i className="fa fa-edit">
							</i>
						</button>
					</li>
				</ul>*/}
			</div>
			<div className="mt-post-footer">
				<ul className="mt-action-bar">
					<MtVoteCell className="mt-action-bar-item" post={post}/>
					{/*<li className="mt-action-bar-item follow-cell pull-right">
						<MtFollowButton />
					</li>*/}
				</ul>
			</div>
		</div>
	);
};
function renderSourceBlock(post) {
	return (
		<div className="source-block">
			<h4 className="source-link">
				<u>Source</u>:
				<a href={post.source}
                   target="_blank">
                    {post.source}
                </a>
			</h4>
			<h4>
				<span className={'tag support-source-type-' + post.source_type_id}/>
				<span className={'tag support-point-type-'  + post.point_type_id}/>
			</h4>
		</div>
	)
}