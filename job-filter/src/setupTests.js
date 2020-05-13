import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';
import 'react-testing-library/cleanup-after-each';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  // values stored in tests will also be available in other tests unless you run
  localStorage.clear();
  // you could also reset all mocks, but this could impact your other mocks
  jest.resetAllMocks();
});
