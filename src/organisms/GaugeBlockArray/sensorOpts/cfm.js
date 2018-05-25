import { GAUGE_COLOR_LEVELS, CFM_MAX } from "./_commonOpts";

export const cfm = {
	gauge: {
		label: {
			format: value => `${value} CFM`,
        },
        max: CFM_MAX
	},
	color: {
		pattern: GAUGE_COLOR_LEVELS, // the three color levels for the percentage values.
		threshold: {
            unit: 'value',
            values: [30, 150, 300, CFM_MAX],
            max: CFM_MAX,
		},
	}
};