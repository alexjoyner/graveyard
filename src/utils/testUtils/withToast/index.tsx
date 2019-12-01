import React, { FC } from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';


const toastOverrides = {
	Root: {
		style: {
			zIndex: 3000
		}
	}
};


export const withToast = (Component: FC): FC => {
	return () => (
		<>
			<Component />
			<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
		</>
	)
}