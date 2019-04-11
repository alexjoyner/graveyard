import React, { useContext, createContext } from 'react';
import { App, BasicApp } from '../../shared/AppBuilder/App';
import { DashFeatures, ExtendableFeatures, DashReducers } from './types/DashBoard';
import { Header } from './private/Header';
import { SideBar } from './private/SideBar';
import { Body } from './private/Body';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { NullComp } from '../../shared/components/NullComp';
import { Reducer } from 'redux';
import { ReducersObject } from '../../shared/AppBuilder/types';
import { SocketSource } from '../../shared/observables/SocketSource/SocketSource';
import { env } from '../../.env';

const DefaultFeatures: DashFeatures = {
	Header: Header,
	Body: Body,
	SideBar: SideBar,
	Accounts: {
		AuthButton: NullComp,
	},
	Feedback: {
		FeedbackButton: NullComp,
	},
	Tutorial: {
		TutorialButton: NullComp,
	},
	Gauges: {
		GaugeBlock: NullComp,
	},
	Points: {
		NoPointsBanner: NullComp,
		PointsInfo: NullComp,
		LivePointData: NullComp,
	}
};
const DefaultState: Object = {
	Accounts: {
		user: {
			id: null,
			username: ''
		}
	}
}
export const SocketContext = createContext(new SocketSource(env.serverAddr));

//  Base DashBoard
class DashBoard extends BasicApp<DashFeatures> {
	constructor() {
		super(DefaultFeatures, {}, (
			<SocketContext.Provider value={new SocketSource(env.serverAddr)}>
				<SideBar>
					<Header />
					<Body />
				</SideBar>
			</SocketContext.Provider>
		), DefaultState);
	}
}

export { DashBoard };

//  Implementation
//   let MyDash = new DashBoard()
//   <MyDash.Run />
//   - Note: Make sure to make FeaturesContext available
