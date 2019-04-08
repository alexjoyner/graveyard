import React, { useContext, createContext } from 'react';
import { App } from '../../app/types/app';
import { DashFeatures, ExtendableFeatures } from './types/DashBoard';
import { Header } from './private/Header';
import { SideBar } from './private/SideBar';
import { Body } from './private/Body';
import { AppFeature } from '../../app/utils/AppFeature';
import { NoComp } from '../../shared/components/NoComp';

const DefaultFeatures: DashFeatures = {
	Header: Header,
	Body: Body,
	SideBar: SideBar,
	Accounts: {
		AuthButton: NoComp
	}
}
export const DashFeaturesContext = createContext(DefaultFeatures);


//  Abstract Feature Class
export abstract class DashFeature extends AppFeature {
	protected features: DashFeatures;
	constructor(decoratedApp: DashBoard) {
		super(decoratedApp);
		this.features = decoratedApp.getFeatures();
	}
	protected setFeature(feature: ExtendableFeatures, settings: any): void {
		this.features[feature] = settings;
	}
}


//  Base DashBoard
class DashBoard implements App {
	private features: DashFeatures = DefaultFeatures;
	getFeatures(): DashFeatures {
		return this.features;
	}
	addFeature<App>(Feature: { new(...args: any[]): App }): App {
		return new Feature(this);
	}
	Run() {
		const { Header, SideBar, Body } = useContext(DashFeaturesContext);
		return (
			<>
				<SideBar>
					<Header />
					<Body />
				</SideBar>
			</>
		);
	}
}

export { DashBoard };

//  Implementation
//   let MyDash = new DashBoard()
//   <MyDash.Run />
//   - Note: Make sure to make FeaturesContext available
