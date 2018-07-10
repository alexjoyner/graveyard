import { PSI_MAX } from "./_commonOpts";
import { colors } from "ro-component-library";

export const psi = {
	units: 'PSI',
	max: PSI_MAX,
	min: 0,
	ranges: [{
	    lowerValue: 0,
	    upperValue: 50,
	    color: colors.danger
	},{
	    lowerValue: 50,
	    upperValue: 100,
	    color: colors.warning
	},{
	    lowerValue: 100,
	    upperValue: 150,
	    color: colors.success
	},{
	    lowerValue: 150,
	    upperValue: 200,
	    color: colors.warning
	},{
	    lowerValue: 200,
	    upperValue: PSI_MAX,
	    color: colors.danger
	}]
  };