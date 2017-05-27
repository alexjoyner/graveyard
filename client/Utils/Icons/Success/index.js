import React from 'react';
require('./_.sass');


const Success = (props) => {
	return (
		<div className="statusIcon">
			<svg height="100px" width="100px" version="1.1" viewBox="0 0 100 100">
			<defs/>
			<g id="Symbols" fill="none" stroke="none" strokeWidth="1">
				<g id="icon/Success" stroke="#7ED321">
					<path id="Combined-Shape" d="M50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 Z M50,94 C74.300529,94 94,74.300529 94,50 C94,25.699471 74.300529,6 50,6 C25.699471,6 6,25.699471 6,50 C6,74.300529 25.699471,94 50,94 Z" fill="#7ED321"/>
					<polyline id="Line-Copy" points="35 54.5937197 51.2255204 74 66 27" strokeLinecap="square" strokeWidth="8"/>
				</g>
			</g>
			</svg>
		</div>
	);
};

export {Success};
