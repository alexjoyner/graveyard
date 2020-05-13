import React from 'react';
import MtVoteCell from '../vote-cell/index';
import MtFollowButton from '../follow-button/index';
import {Link} from 'react-router';
require('./styles/_.sass');
function getPostType(pros, cons, dwns){
	let score = (pros + cons) - dwns;
	if(score === 0)
		return 'neutral';
	let pro_con = pros - cons;
	if(pro_con < 0)
		return 'con';

	return 'pro';
}
export default ({ post }) => {
	return (
		<div >
			<div className={`mt-post `+ getPostType(post.pro_ups, post.con_ups, post.dwns) +` point-type-`+ post.point_type_id}>
				<div className="mt-post-header">
					{/*<Link to={'post/'+ post._id}>*/}
						<h2 className="mt-post-title">{post._id + ' ' + post.title}</h2>
					{/*</Link>*/}
					<h3>{post.detail}</h3>
					{(post.source_type_id !== null) ? renderSourceBlock(post) : null}
				</div>
				<div className="mt-post-body">
					{/*<div className="row">*/}
						{/*<div className="col col-xs-6 vote-status-block">*/}
							{/*<h2 className="text-center results-percent">0%</h2>*/}
							{/*<h3 className="text-center vote-status">NOT ENOUGH DATA TO <br/> START OFFICIAL VOTING</h3>*/}
							{/*<div className="text-center">*/}
								{/*<button className="mt-btn">*/}
									{/*CAST YOUR VOTE!*/}
								{/*</button>*/}
							{/*</div>*/}
						{/*</div>*/}
						{/*<div className="col col-xs-6 data-base">*/}
							{/*<h3><u>Data so far:</u></h3>*/}
							{/*<ul>*/}
								{/*<li>2100 Thought</li>*/}
								{/*<li>1200 Data Points</li>*/}
							{/*</ul>*/}
							{/*<div className="text-center">*/}
								{/*<button className="mt-btn mt-btn-info">*/}
									{/*Add Your Thoughts*/}
								{/*</button>*/}
							{/*</div>*/}
							{/*<div className="text-center">*/}
								{/*<button className="mt-btn mt-btn-info">*/}
									{/*Add Supporting Data*/}
								{/*</button>*/}
							{/*</div>*/}
						{/*</div>*/}
					{/*</div>*/}
				</div>
				<div className="mt-post-footer">
					<ul className="mt-action-bar">
						<MtVoteCell className="mt-action-bar-item" post={post}/>
						<li className="mt-action-bar-item follow-cell pull-right">
							<MtFollowButton />
						</li>
					</ul>
				</div>
			</div>
			{/*<div className={`mt-post point-type-`+ post.point_type_id}>
			 <div className="mt-post-contents">
			 <Link to={'post/'+ post._id}><h2 className="mt-post-title">{post.title}</h2></Link>
			 <h3>{post.detail}</h3>
			 {(post.source_type_id !== null) ? renderSourceBlock(post) : null}
			 /!*<ul className="owner-controls">
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
			 </ul>*!/
			 </div>
			 <div className="mt-post-footer">
			 <ul className="mt-action-bar">
			 <MtVoteCell className="mt-action-bar-item" post={post}/>
			 /!*<li className="mt-action-bar-item follow-cell pull-right">
			 <MtFollowButton />
			 </li>*!/
			 </ul>
			 </div>
			 </div>*/}
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