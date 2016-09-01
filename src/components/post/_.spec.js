import {renderComponent, expect} from '../../js/test_helper';
import Post from './';

const MOCK_ISSUE_DATA = {
	_id: 1,
	title: 'Should I be testing?',
	detail: 'Testing detail information',
	source: null,
	source_type_id: null,
	point_type_id: null
};
const MOCK_THOUGHT_DATA = {
	_id: 1,
	title: 'Tests save time',
	detail: 'Testing detail information',
	source: null,
	source_type_id: null,
	point_type_id: null
};
const MOCK_SUPPORT_DATA = {
	_id: 1,
	title: 'Testing data by computer is much quicker than a human',
	detail: 'Testing detail information',
	source: null,
	source_type_id: 5,
	point_type_id: null
};

// Used describe to group together similar tests
describe('Post', () => {
	let component;
	describe('Issue', () => {
		beforeEach(() => {
			component = renderComponent(Post, {post: MOCK_ISSUE_DATA});
		});

		it('Should contain the correct title', () => {
			expect(component.find('.mt-post-title')).to.contain(MOCK_ISSUE_DATA.title);
		});
		it('Should contain the correct detail info', () => {
			expect(component.find('.mt-post-contents')).to.contain(MOCK_ISSUE_DATA.detail);
		});
		it('Should not contain any source info', () => {
			return expect(component.find('.source-block')).to.not.exist;
		});

		it('Should contain a vote cell block', () => {
			return expect(component.find('.vote-cell')).to.exist;
		});

	});
	describe('Thought', () => {
		beforeEach(() => {
			component = renderComponent(Post, {post: MOCK_THOUGHT_DATA});
		});
		it('Should contain the correct title', () => {
			expect(component.find('.mt-post-title')).to.contain(MOCK_THOUGHT_DATA.title);
		});
		it('Should contain the correct detail info', () => {
			expect(component.find('.mt-post-contents')).to.contain(MOCK_THOUGHT_DATA.detail);
		});
		it('Should not contain any source info', () => {
			return expect(component.find('.source-block')).to.not.exist;
		});
		it('Should contain a vote cell block', () => {
			return expect(component.find('.vote-cell')).to.exist;
		});
	});
	describe('Support', () => {
		beforeEach(() => {
			component = renderComponent(Post, {post: MOCK_SUPPORT_DATA});
		});
		it('Should contain the correct title', () => {
			expect(component.find('.mt-post-title')).to.contain(MOCK_SUPPORT_DATA.title);
		});
		it('Should contain the correct detail info', () => {
			expect(component.find('.mt-post-contents')).to.contain(MOCK_SUPPORT_DATA.detail);
		});
		it('Should not contain any source info', () => {
			return expect(component.find('.source-block')).to.exist;
		});
		it('Should contain a vote cell block', () => {
			return expect(component.find('.vote-cell')).to.exist;
		});
	});
});
