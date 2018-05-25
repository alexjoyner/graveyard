import { GAUGE_COLOR_LEVELS, TEMP_MAX } from "./_commonOpts";

export const temp = {
	gauge: {
		label: {
			format: value => `${value} °F`,
		},
        max: TEMP_MAX
	},
	color: {
		pattern: GAUGE_COLOR_LEVELS, // the three color levels for the percentage values.
		threshold: {
            unit: 'value',
            values: [30, 70, 78, TEMP_MAX],
            max: TEMP_MAX,
		},
	}
};