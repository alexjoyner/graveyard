import React, { createContext, useState } from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { BasicApp } from '../../utils/AppBuilder/App';
import { AppFeatures } from '../../app/types/App';
import { Header } from './public/Header';
import { SideBar } from './public/SideBar';
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
	Header: Header,
	Body: Body,
	SideBar: SideBar,
	Demo: {
		DemoHeader: NullComp
	},
	Jobs: {
		JobsData: NullComp,
		JobPost: NullComp,
		JobDetailsModal: NullComp
	}
};
export const DefaultState: Object = {
	Body: {
		contents: 'Entry Level Software Jobs'
	},
	Accounts: {
		user: {
			id: null,
			username: 'Demo User'
		}
	}
};

const DashBoardRoot = () => {
	return (
		<>
			<SideBar>
				<Header />
				<Body />
			</SideBar>
			<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
		</>
	);
};

//  Base DashBoard
class DashBoard extends BasicApp<AppFeatures> {
	constructor() {
		super(DefaultFeatures, {}, <DashBoardRoot />, DefaultState);
	}
}

export { DashBoard };

//  Implementation
//   let MyDash = new DashBoard()
//   <MyDash.Run />
//   - Note: Make sure to make FeaturesContext available
