import { colors } from 'ro-component-library';

export const cfm = {
  units: 'CFM',
  max: 500,
  min: 0,
  ranges: [{
    lowerValue: 0,
    upperValue: 200,
    color: colors.danger,
  }, {
    lowerValue: 200,
    upperValue: 250,
    color: colors.warning,
  }, {
    lowerValue: 250,
    upperValue: 325,
    color: colors.success,
  }, {
    lowerValue: 325,
    upperValue: 375,
    color: colors.warning,
  }, {
    lowerValue: 375,
    upperValue: 500,
    color: colors.danger,
  }],
};
