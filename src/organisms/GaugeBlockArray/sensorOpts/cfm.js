import { CFM_MAX } from "./_commonOpts";

export const cfm = {
	units: 'CFM',
	max: CFM_MAX,
	min: 0,
	ranges: [{
	    lowerValue: 0,
	    upperValue: 100,
	    color: "#95a5a6"
	},{
	    lowerValue: 0,
	    upperValue: 200,
	    color: "#9b59b6"
	},{
	    lowerValue: 200,
	    upperValue: 250,
	    color: "#f1c40f"
	},{
	    lowerValue: 250,
	    upperValue: 350,
	    color: "#2ecc71"
	},{
	    lowerValue: 350,
	    upperValue: CFM_MAX,
	    color: "#e74c3c"
	}]
  };