import { colors } from 'ro-component-library';

export const psi = {
  units: 'PSI',
  max: 300,
  min: 0,
  ranges: [{
    lowerValue: 0,
    upperValue: 50,
    color: colors.danger,
  }, {
    lowerValue: 50,
    upperValue: 100,
    color: colors.warning,
  }, {
    lowerValue: 100,
    upperValue: 150,
    color: colors.success,
  }, {
    lowerValue: 150,
    upperValue: 200,
    color: colors.warning,
  }, {
    lowerValue: 200,
    upperValue: 300,
    color: colors.danger,
  }],
};

