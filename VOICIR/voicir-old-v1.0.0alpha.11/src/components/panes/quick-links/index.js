import React from 'react';
import {Link} from 'react-router';
require('./_.sass');
export default (props) => {
	return (
		<div>
			<div className="QuickLinksPane">
				<h3 className="text-center">
					Quick Links
				</h3>
				<hr/>
				<ul>
					<li>
						<Link to={'/feed/hot'}>Hot right now</Link>
					</li>
					<li>
						<Link to={'/feed/top'}>All time top</Link>
					</li>
					<li>
						<Link to={'/topicfeed/topicname/Controversial/topicid/35'}>All time top controversial</Link>

					</li>
				</ul>
				<h4>
					<u>Default locations selected by MetaTruth</u>
				</h4>
				{/*THE DEFAULT LOCATIONS WILL ONLY WORK WITH THE*/}
				<ul>
					<li>
						<Link to={'/topicfeed/topicname/Nash County, NC/topicid/87'}>Nash County, NC</Link>
					</li>
					<li>
						<Link to={'/topicfeed/topicname/Rocky Mount, NC/topicid/85'}>Rocky Mount, NC</Link>
					</li>
					<li>
						<Link to={'/topicfeed/topicname/Nashville, NC/topicid/86'}>Nashville, NC</Link>
					</li>
					<li>
						<Link to={'/topicfeed/topicname/Nash Community College, NC/topicid/88'}>Nash Community College,
							NC</Link>
					</li>
				</ul>
				<h4>
					<u>Your favorite places and topics</u>
				</h4>
			</div>
		</div>
	);
}