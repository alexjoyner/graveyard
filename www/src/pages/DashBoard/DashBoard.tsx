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

const DefaultFeatures: DashFeatures = {
	Header: Header,
	Body: Body,
	SideBar: SideBar,
	Accounts: {
		AuthButton: NullComp,
		AccountInfo: {
			UserName: NullComp
		}
	}
};
export const DashFeaturesContext = createContext(DefaultFeatures);

//  Base DashBoard
class DashBoard extends BasicApp<DashFeatures> {
	constructor() {
		super(DefaultFeatures, {}, (
			<>
				<SideBar>
					<Header />
					<Body />
				</SideBar>
			</>
		));
	}
}

export { DashBoard };

//  Implementation
//   let MyDash = new DashBoard()
//   <MyDash.Run />
//   - Note: Make sure to make FeaturesContext available
