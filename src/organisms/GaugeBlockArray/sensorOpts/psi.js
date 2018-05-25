import { GAUGE_COLOR_LEVELS, PSI_MAX } from "./_commonOpts";

export const psi = {
	gauge: {
		label: {
			format: value => `${value} PSI`,
		},
        max: PSI_MAX
	},
	color: {
		pattern: GAUGE_COLOR_LEVELS, // the three color levels for the percentage values.
		threshold: {
            values: [30, 110, 130, PSI_MAX],
            max: PSI_MAX,
		},
	}
};