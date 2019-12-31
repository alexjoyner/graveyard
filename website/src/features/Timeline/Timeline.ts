import { PostProps, Post } from './public/Post';
import { App } from '../../utils/AppBuilder/App';
import { AppFeature } from '../../utils/AppBuilder/AppFeature';
import { AppFeatures } from '../../app/types/App';
import { FC } from 'react';
import { reducer } from './ducks/timeline.duck';
export interface TimelineFeatureInterface {
	Post: FC<PostProps>;
}

export class TimelineFeature extends AppFeature<AppFeatures> {
	constructor(decoratedApp: App<AppFeatures>) {
		super(decoratedApp);
		const ExposedFeatures: TimelineFeatureInterface = {
			Post: Post
		};
		this.setFeatureSettings('Timeline', ExposedFeatures);
		this.setReducerSettings({
			Timeline: reducer
		});
	}
}
