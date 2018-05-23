export const cfm = {
	gauge: {
		label: {
			format: value => `${value} CFM`,
		},
	},
	color: {
		pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
		threshold: {
			values: [30, 150, 300, 500],
		},
	}
};