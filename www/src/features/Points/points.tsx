import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { App } from '../../shared/AppBuilder/App';
import { NoPointsBanner } from './public/NoPointsBanner';
import { PointsInfo, PointsInfoProps } from './public/PointsInfo/PointsInfo';
import { LivePointData, LivePointDataProps } from './public/LivePointData/LivePointData';
import { reducer } from './ducks/points.duck';
import { SelectedPointsToolbox, SelectedPointsToolboxProps } from './public/SelectedPointsToolbox/SelectedPointsToolbox';

export interface PointsFeatureInterface {
  NoPointsBanner: FC,
  PointsInfo: FC<PointsInfoProps>,
  LivePointData: FC<LivePointDataProps>,
  SelectedPointsToolbox: FC<SelectedPointsToolboxProps>
}


export class PointsFeature extends AppFeature<DashFeatures>{
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const Features: PointsFeatureInterface = {
      NoPointsBanner,
      PointsInfo,
      LivePointData,
      SelectedPointsToolbox,
    }
    this.setFeatureSettings('Points', Features);
    this.setReducerSettings({
      Points: reducer
    })
  }
}