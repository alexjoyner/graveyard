export const cfm = {
	gauge: {
		label: {
			format: value => `${value} CFM`,
        },
        max: 500
	},
	color: {
		pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
		threshold: {
            unit: 'value',
            values: [30, 150, 300, 500],
            max: 500,
		},
	}
};