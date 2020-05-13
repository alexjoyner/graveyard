import React, { ReactNode, useContext } from 'react';
import { SideBar as RoSideBar, colors } from 'ro-component-library';
import { useWindowSize } from '../../../shared/effects/useWindowSize';
import { FeaturesContext } from '../../../shared/AppBuilder/featuresContext';

const SideBar = ({ children }: { children: ReactNode }) => {
	const { width } = useWindowSize();
	const { Groups } = useContext(FeaturesContext);
	const { GroupsMenu } = Groups;
	const sidebarStyles = {
		sidebar: {
			background: colors.dark,
			width: width > 800 ? '300px' : '250px',
			top: '56px'
		}
	};
	return (GroupsMenu({}) === null) ? (
		<>{children}</>
	) : (
			<RoSideBar
				sidebar={<GroupsMenu />}
				docked={width > 800}
				styles={sidebarStyles}
			>
				{children}
			</RoSideBar>
		);
};

export { SideBar };
