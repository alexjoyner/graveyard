export const psi = {
	gauge: {
		label: {
			format: value => `${value} PSI`,
		},
	},
	color: {
		pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
		threshold: {
			values: [30, 110, 130, 200],
		},
	}
};