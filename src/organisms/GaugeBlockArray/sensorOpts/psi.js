export const psi = {
	gauge: {
		label: {
			format: value => `${value} PSI`,
		},
        max: 300
	},
	color: {
		pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
		threshold: {
            values: [30, 110, 130, 300],
            max: 300,
		},
	}
};