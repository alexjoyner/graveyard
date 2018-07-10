import { CFM_MAX } from "./_commonOpts";
import { colors } from "ro-component-library";

export const cfm = {
	units: 'CFM',
	max: CFM_MAX,
	min: 0,
	ranges: [{
	    lowerValue: 0,
	    upperValue: 200,
	    color: colors.danger
	},{
	    lowerValue: 200,
	    upperValue: 250,
	    color: colors.warning
	},{
	    lowerValue: 250,
	    upperValue: 325,
	    color: colors.success
	},{
	    lowerValue: 325,
	    upperValue: 375,
	    color: colors.warning
	},{
	    lowerValue: 375,
	    upperValue: CFM_MAX,
	    color: colors.danger
	}]
  };