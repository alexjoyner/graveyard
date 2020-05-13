import {renderComponent, expect} from '../../../js/test_helper';
import {combineReducers} from 'redux';
import Home from './';

const MOCK_POSTS = [{
	_id: 1,
	title: 'Testing 123'
}];
const MockReducer = combineReducers({
	posts: function(state = {all: MOCK_POSTS, post: null}) {
		return state;
	}
});
// Used describe to group together similar tests
describe('Home', () => {
	let component;
	describe('Hot Feed Nothing Passed or Route \'/\'', () => {
		beforeEach(() => {
			component = renderComponent(Home, {params: {}}, undefined, MockReducer);
		});
		it('Should contain a the header Hot questions on MetaTruth right now', () => {
			return expect(component).to.contain('Hot questions on MetaTruth right now');
		});

		xit('Should contain a quick links pane', () => {
			return expect(component.find('.QuickLinksPane')).to.exist;
		});

		it('Should contain a post', () => {
			return expect(component.find('.mt-post')).to.exist;
		});
	});
	describe('Hot Feed feed/:feed_name', () => {
		beforeEach(() => {
			component = renderComponent(Home, {params: {feed_name: 'hot'}}, undefined, MockReducer);
		});
		it('Should contain a the header Hot questions on MetaTruth right now', () => {
			return expect(component).to.contain('Hot questions on MetaTruth right now');
		});

		xit('Should contain a quick links pane', () => {
			return expect(component.find('.QuickLinksPane')).to.exist;
		});

		it('Should contain a post', () => {
			return expect(component.find('.mt-post')).to.exist;
		});
	});
	describe('Top Feed feed/:feed_name', () => {
		beforeEach(() => {
			component = renderComponent(Home, {params: {feed_name: 'top'}}, undefined, MockReducer);
		});
		it('Should contain a the header Top questions on MetaTruth right now', () => {
			return expect(component).to.contain('All time top posts');
		});

		xit('Should contain a quick links pane', () => {
			return expect(component.find('.QuickLinksPane')).to.exist;
		});

		it('Should contain a post', () => {
			return expect(component.find('.mt-post')).to.exist;
		});
	});
	describe('Topic Feed topicfeed/topicname/:topic_name/topicid/:topic_id', () => {
		beforeEach(() => {
			component = renderComponent(Home, {params: {topic_name: 'Testing', topic_id: 1}}, undefined, MockReducer);
		});
		it('Should contain a the header Top posts in Testing', () => {
			return expect(component).to.contain('Top posts in Testing');
		});

		xit('Should contain a quick links pane', () => {
			return expect(component.find('.QuickLinksPane')).to.exist;
		});

		it('Should contain a post', () => {
			return expect(component.find('.mt-post')).to.exist;
		});
	});

});
