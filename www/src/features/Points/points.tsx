import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { App } from '../../shared/AppBuilder/App';
import { NoPointsBanner } from './public/NoPointsBanner';
import { PointsInfo, PointsInfoProps } from './public/PointsInfo/PointsInfo';
import { LivePointData, LivePointDataProps } from './public/LivePointData/LivePointData';

export interface PointsFeatureInterface {
  NoPointsBanner: FC,
  PointsInfo: FC<PointsInfoProps>,
  LivePointData: FC<LivePointDataProps>,
}


export class PointsFeature extends AppFeature<DashFeatures>{
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const Features: PointsFeatureInterface = {
      NoPointsBanner,
      PointsInfo,
      LivePointData,
    }
    this.setFeatureSettings('Points', Features);
  }
}