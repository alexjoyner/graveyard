import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-testing-library/cleanup-after-each';

Enzyme.configure({ adapter: new Adapter() });
