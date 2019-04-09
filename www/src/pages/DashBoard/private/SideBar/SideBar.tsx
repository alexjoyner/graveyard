import React, { ReactNode } from 'react';
import { SideBar as RoSideBar, colors } from 'ro-component-library';
import { useWindowSize } from '../../../../shared/effects/useWindowSize';
import { NullComp } from '../../../../shared/components/NullComp';

const SideBar = ({ children }: { children: ReactNode }) => {
	const { width } = useWindowSize();
	const sidebarStyles = {
		sidebar: {
			background: colors.dark,
			width: width > 800 ? '300px' : '250px',
			top: '56px'
		}
	};
	return (
		<RoSideBar
			sidebar={<NullComp />}
			docked={width > 800}
			styles={sidebarStyles}
		>
			{children}
		</RoSideBar>
	);
};

export { SideBar };
