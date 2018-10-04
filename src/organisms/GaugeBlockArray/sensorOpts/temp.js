import { colors } from 'ro-component-library';

export const temp = {
  units: '°F',
  max: 100,
  min: 0,
  ranges: [{
    lowerValue: 0,
    upperValue: 50,
    color: colors.primary,
  }, {
    lowerValue: 50,
    upperValue: 65,
    color: colors.warning,
  }, {
    lowerValue: 65,
    upperValue: 75,
    color: colors.success,
  }, {
    lowerValue: 75,
    upperValue: 85,
    color: colors.warning,
  }, {
    lowerValue: 85,
    upperValue: 100,
    color: colors.danger,
  }],
};
