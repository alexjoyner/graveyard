import { AMPS_MAX } from "./_commonOpts";

export const amps = {
	units: 'A',
	max: AMPS_MAX,
	min: 0,
	ranges: [{
	    lowerValue: 0,
	    upperValue: 100,
	    color: "#95a5a6"
	},{
	    lowerValue: 100,
	    upperValue: 200,
	    color: "#9b59b6"
	},{
	    lowerValue: 200,
	    upperValue: 300,
	    color: "#f1c40f"
	},{
	    lowerValue: 300,
	    upperValue: 400,
	    color: "#2ecc71"
	},{
	    lowerValue: 400,
	    upperValue: AMPS_MAX,
	    color: "#e74c3c"
	}]
  };