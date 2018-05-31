import { PSI_MAX } from "./_commonOpts";

export const psi = {
	units: 'PSI',
	max: PSI_MAX,
	min: 0,
	ranges: [{
	    lowerValue: 0,
	    upperValue: 50,
	    color: "#95a5a6"
	},{
	    lowerValue: 50,
	    upperValue: 100,
	    color: "#9b59b6"
	},{
	    lowerValue: 100,
	    upperValue: 150,
	    color: "#f1c40f"
	},{
	    lowerValue: 150,
	    upperValue: 200,
	    color: "#2ecc71"
	},{
	    lowerValue: 200,
	    upperValue: PSI_MAX,
	    color: "#e74c3c"
	}]
  };