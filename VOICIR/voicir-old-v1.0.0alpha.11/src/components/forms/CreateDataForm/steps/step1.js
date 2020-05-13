import React from 'react';
import {Field} from 'redux-form';
const  { DOM: { input, select, textarea } } = React
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
							<Field type="radio"
								   name="source_type_id"
								   component="input"
								   value="1"
								   onClick={props.next.bind(null)}/>
							Meta Analysis
						</label>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							Credible
							<Field type="radio"
								   name="source_type_id"
								   component="input"
								   value="2"
								   onClick={props.next.bind(null)}/>
						</label>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							Website/Blog
							<Field type="radio"
								   name="source_type_id"
								   component="input"
								   value="3"
								   onClick={props.next.bind(null)}/>
						</label>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							<Field type="radio"
								   name="source_type_id"
								   component="input"
								   value="4"
								   onClick={props.next.bind(null)}/>
							TV Media <br/> (CNN, FOX, HUFFINGTON, etc)
						</label>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							Personal Opinion
							<Field type="radio"
								   name="source_type_id"
								   component="input"
								   value="5"
								   onClick={props.next.bind(null)}/>
						</label>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="checkbox  text-center">
						<label>
							Other
							<Field type="radio"
								   name="source_type_id"
								   component="input"
								   value="6"
								   onClick={props.next.bind(null)}/>
						</label>
					</div>
				</div>
			</div>
		</div>
	)
};
