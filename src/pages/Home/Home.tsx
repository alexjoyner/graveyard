import React, { createContext, useState } from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { BasicApp } from '../../utils/AppBuilder/App';
import { AppFeatures } from '../../app/types/App';
import { Body } from './public/Body';
import { NullComp } from '../../shared/components/NullComp';
const toastOverrides = {
	Root: {
		style: {
			zIndex: 3000
		}
	}
};

const DefaultFeatures: AppFeatures = {
	Body: Body,
	Demo: {
		DemoHeader: NullComp
	},
	Timeline: {
		Post: NullComp
	}
};

export const DefaultState: Object = {
	Body: {
		contents: 'Welcome to My Personal Website'
	},
	Accounts: {
		user: {
			id: null,
			username: 'Demo User'
		}
	}
};

const HomePageRoot = () => {
	return (
		<>
			<Body />
			<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
		</>
	);
};

//  Base HomePage
class HomePage extends BasicApp<AppFeatures> {
	constructor() {
		super(DefaultFeatures, {}, <HomePageRoot />, DefaultState);
	}
}

export { HomePage };

//  Implementation
//   let MyDash = new HomePage()
//   <MyDash.Run />
//   - Note: Make sure to make FeaturesContext available
