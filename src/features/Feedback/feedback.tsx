import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { DashBoard } from '../../pages/DashBoard';
import { FC } from 'react';
import { FeedbackButton } from './public/FeedbackButton';

export type FeedbackFeatureInterface = {
  FeedbackButton: FC;
};

export class FeedbackFeature extends AppFeature<DashFeatures> {
  constructor(App: DashBoard) {
    super(App);
    const Feature: FeedbackFeatureInterface = {
      FeedbackButton
    };
    this.setFeatureSettings('Feedback', Feature);
  }
}