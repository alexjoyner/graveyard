import { number } from 'prop-types';

type Range = {
  lowerValue: number,
  upperValue: number,
  color: 'success' | 'warning' | 'danger',
  alertLevel: 'success' | 'warning' | 'danger',
}

export interface GaugeSettings {
  max: number,
  min: number,
  ranges: Range[],
  units: string,
}