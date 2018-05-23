export const temp = {
	gauge: {
		label: {
			format: value => `${value} °F`,
		},
	},
	color: {
		pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
		threshold: {
			values: [30, 70, 78, 100],
		},
	}
};