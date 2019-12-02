import React, { useContext } from 'react';
import { render, TestApp, wait } from '../../utils/AppBuilder/test-utils';
import { FeaturesContext } from '../../utils/AppBuilder/featuresContext';
import { StoreContext } from '../../utils/AppBuilder/storeContext';
import { {{pascalCase name}}Feature } from './{{pascalCase name}}';
import { RenderResult, fireEvent } from 'react-testing-library';
import { INITIAL_STATE } from './ducks/{{camelCase name}}.duck';
import { async } from 'q';

const {{pascalCase name}}Implement = () => {
  // The following comment is an example of how you could set up this component
	// const { {{pascalCase name}} } = useContext(FeaturesContext);
	// const [state] = useContext(StoreContext);
	// const { {{pascalCase name}}Button } = {{pascalCase name}};
	return (
		<>
      {/* Place the basic implementation of your features public components here*/}
		</>
	);
};

describe('{{pascalCase name}} feature', () => {
	let utils: RenderResult;
	beforeEach(() => {
		window.location.reload = jest.fn();
		const Base = TestApp({
			children: <{{pascalCase name}}Implement />
		});
		const Test = Base.addFeatures([{{pascalCase name}}Feature]);
		const Root = Test.Run({});
		utils = render(<>{Root}</>);
	});
});
