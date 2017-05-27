import {renderComponent, expect, sinon} from "ro-dev-utils";
import {TextArea} from "./";
import reducers from "../../../_startup/combine_reducers";

describe('TextArea component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(TextArea, {
			props: {}
		}, {}, reducers);
	});

	it('Should render a TextArea', () => {
		expect(component.find('textarea')).to.exist
	});
});
