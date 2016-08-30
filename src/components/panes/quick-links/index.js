import React from 'react';
require('./_.sass');
export default (props) => {
	return (
		<div className="TopicsPane">
			<h3 className="text-center">
				Quick Links
			</h3>
			<hr/>
			<ul>
				<li>
					Hot right now
				</li>
				<li>
					All time top
				</li>
				<li>
					All time top controversial
				</li>
			</ul>
			<h4>
				<u>Default locations selected by MetaTruth</u>
			</h4>
			{/*THE DEFAULT LOCATIONS WILL ONLY WORK WITH THE*/}
			<ul>
				<li>
					Nash County, NC
				</li>
				<li>
					Rocky Mount, NC
				</li>
				<li>
					Nashville, NC
				</li>
				<li>
					Nash Community College, NC
				</li>
			</ul>
			<h4>
				<u>Your favorite places and topics</u>
			</h4>
		</div>
	);
}