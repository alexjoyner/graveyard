import { GAUGE_COLOR_LEVELS, AMPS_MAX } from "./_commonOpts";

export const amps = {
	gauge: {
		label: {
			format: value => `${value} A`,
		},
        max: AMPS_MAX
	},
	color: {
		pattern: GAUGE_COLOR_LEVELS, // the three color levels for the percentage values.
		threshold: {
            unit: 'value',
            values: [30, 150, 300, AMPS_MAX],
            max: AMPS_MAX,
		},
	}
};