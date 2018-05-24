export const temp = {
	gauge: {
		label: {
			format: value => `${value} °F`,
		},
        max: 100
	},
	color: {
		pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
		threshold: {
            unit: 'value',
            values: [30, 70, 78, 100],
            max: 100,
		},
	}
};