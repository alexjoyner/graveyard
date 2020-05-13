import React, { createContext, useState } from 'react';
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
export const SocketContext = createContext(new SocketSource(() => null));

const DashRoot = () => {
	const [connectionStatus, setConnectionStatus] = useState('DISCONNECTED');
	return (
		<SocketContext.Provider value={new SocketSource(details => {
			console.log('New Status: ', details);
			setConnectionStatus(details.status);
		})}>
			{(connectionStatus === 'DISCONNECTED') ? (
				<>
					<h1>Server Disconnected</h1>
					<p>To Connect, Plug ethernet cable into datalogger and computer. We'll handle the rest :)</p>
					<p>Sometimes the server can lose connection at random.  If this happens, just be patient, we will reconnect automatically</p>
					<h3>NOTE: It may take a 5-30 seconds to detect a disconnect or reconnection</h3>
				</>
			) : (
					<SideBar>
						<Header />
						<Body />
					</SideBar>
				)}
			<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
		</SocketContext.Provider>
	)
}

//  Base DashBoard
class DashBoard extends BasicApp<DashFeatures> {
	constructor() {
		super(DefaultFeatures, {}, (
			<DashRoot />
		), DefaultState);
	}
}

export { DashBoard };

//  Implementation
//   let MyDash = new DashBoard()
//   <MyDash.Run />
//   - Note: Make sure to make FeaturesContext available
