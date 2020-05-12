import React from 'react';
require('./_.sass');


const Error = (props) => {
	return (
		<div className="statusIcon">
			<svg height="100px" width="100px" version="1.1" viewBox="0 0 100 100">
				<defs/>
				<g id="Symbols" fill="none" stroke="none" strokeWidth="1">
					<g id="icon/error" stroke="#F6A623">
						<path id="Combined-Shape" d="M50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 Z M50,94 C74.300529,94 94,74.300529 94,50 C94,25.699471 74.300529,6 50,6 C25.699471,6 6,25.699471 6,50 C6,74.300529 25.699471,94 50,94 Z" fill="#F6A623"/>
						<path id="Line" d="M50.5,16.5 L50.5,57.5" strokeLinecap="square" strokeWidth="9"/>
						<path id="Line" d="M50.5,74.5 L50.5,83.5" strokeLinecap="square" strokeWidth="9"/>
					</g>
				</g>
			</svg>
		</div>
	);
};

export {Error};
