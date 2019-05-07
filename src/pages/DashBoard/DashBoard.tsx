import React, { createContext } from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { BasicApp } from '../../shared/AppBuilder/App';
import { DashFeatures } from './types/DashBoard';
import { Header } from './public/Header';
import { SideBar } from './public/SideBar';
import { Body } from './public/Body';
import { NullComp } from '../../shared/components/NullComp';
import { SocketSource } from '../../shared/observables/SocketSource/SocketSource';
const toastOverrides = {
	Root: {
		style: {
			zIndex: 3000
		}
	}
};

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
		SelectedPointsToolbox: NullComp,
	},
	Groups: {
		GroupsMenu: NullComp
	},
	Graphs: {
		GraphModal: NullComp
	},
	Features: {
		FeaturesButton: NullComp
	}
};
export const DefaultState: Object = {
	Groups: {
		currentGroup: {
			id: 0,
			name: 'All Points'
		}
	},
	Accounts: {
		user: {
			id: null,
			username: 'OEE-Master'
		}
	}
}
export const SocketContext = createContext(new SocketSource());

//  Base DashBoard
class DashBoard extends BasicApp<DashFeatures> {
	constructor() {
		super(DefaultFeatures, {}, (
			<SocketContext.Provider value={new SocketSource()}>
				<SideBar>
					<Header />
					<Body />
				</SideBar>
				<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
			</SocketContext.Provider>
		), DefaultState);
	}
}

export { DashBoard };

//  Implementation
//   let MyDash = new DashBoard()
//   <MyDash.Run />
//   - Note: Make sure to make FeaturesContext available
