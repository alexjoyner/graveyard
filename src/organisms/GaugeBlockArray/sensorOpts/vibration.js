import { colors } from 'ro-component-library';

export const vibration = {
	units: 'in/sec',
	max: 500,
	min: 0,
	ranges: [{
		lowerValue: 0,
		upperValue: 50,
		color: colors.primary
	}, {
		lowerValue: 50,
		upperValue: 100,
		color: colors.warning
	}, {
		lowerValue: 100,
		upperValue: 150,
		color: colors.success
	}, {
		lowerValue: 150,
		upperValue: 200,
		color: colors.warning
	}, {
		lowerValue: 200,
		upperValue: 500,
		color: colors.danger
	}]
};