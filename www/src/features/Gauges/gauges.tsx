import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { App } from '../../shared/AppBuilder/App';
import { GaugeBlock, GaugeBlockProps } from './public/GaugeBlock/GaugeBlock';

export interface GaugesFeatureInterface {
  GaugeBlock: FC<GaugeBlockProps>
}

export class GaugesFeature extends AppFeature<DashFeatures>{
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const Features: GaugesFeatureInterface = {
      GaugeBlock: GaugeBlock
    }
    this.setFeatureSettings('Gauges', Features);
  }
}