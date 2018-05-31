import { TEMP_MAX } from "./_commonOpts";

export const temp = {
	units: 'PSI',
	max: TEMP_MAX,
	min: 0,
	ranges: [{
	    lowerValue: 0,
	    upperValue: 63,
	    color: "#3498db"
	},{
	    lowerValue: 63,
	    upperValue: 80,
	    color: "#2ecc71"
	},{
	    lowerValue: 80,
	    upperValue: TEMP_MAX,
	    color: "#e74c3c"
	}]
  };