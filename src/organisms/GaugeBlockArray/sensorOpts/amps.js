import { colors } from "ro-component-library";

export const amps = {
  units: 'A',
  max: 100,
  min: 0,
  ranges: [{
    lowerValue: 0,
    upperValue: 30,
    color: colors.danger
  }, {
    lowerValue: 30,
    upperValue: 40,
    color: colors.warning
  }, {
    lowerValue: 40,
    upperValue: 60,
    color: colors.success
  }, {
    lowerValue: 60,
    upperValue: 70,
    color: colors.warning
  }, {
    lowerValue: 70,
    upperValue: 100,
    color: colors.danger
  }]
};