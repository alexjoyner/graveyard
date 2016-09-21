import React from 'react';

export default (props) => {
	return (
		<div id="Step1">
			<div className="text-center">
				<h5>
					Source Type
				</h5>
			</div>
			<hr/>
			<div className="row">
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							<input type="radio"
								   name="source_type"
								   required/>
							Meta Analysis
						</label>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							Credible
							<input type="radio"
								   name="source_type"/>
						</label>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							Website/Blog
							<input type="radio"
								   name="source_type"/>
						</label>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							<input type="radio"
								   name="source_type"/>
							TV Media <br/> (CNN, FOX, HUFFINGTON, etc)
						</label>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							Personal Opinion
							<input type="radio"
								   name="source_type"/>
						</label>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							Other
							<input type="radio"
								   name="source_type"/>
						</label>
					</div>
				</div>
			</div>
		</div>
	)
};