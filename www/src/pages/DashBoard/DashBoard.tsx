import React, { useContext } from 'react';
import { App } from '../../app/types/app';
import { DashFeatures } from './types/DashBoard';
import { FeaturesContext } from '../../app/app';
import { Header } from './private/Header';
import { SideBar } from './private/SideBar';
import { Body } from './private/Body';

//  Base DashBoard
class DashBoard implements App {
	private features: DashFeatures = {
		Header: Header,
		SideBar: SideBar,
		Body: Body
	};
	getFeatures(): DashFeatures {
		return this.features;
	}
	addFeature<App>(Feature: { new (...args: any[]): App }): App {
		return new Feature(this);
	}
	Run() {
		const { Header, SideBar, Body } = useContext<DashFeatures>(FeaturesContext);
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
